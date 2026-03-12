import assert from 'node:assert/strict';

import * as sass from 'sass';

describe('utilities mixins', () => {
  it('generates property utilities from a plain value map', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/utilities" as utility;

      $display-values: (
        block: block,
        hidden: none
      );

      @include utility.generate-property-utilities($display-values, 'display');
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /\.block\s*\{\s*display:\s*block;\s*\}/);
    assert.match(result.css, /\.hidden\s*\{\s*display:\s*none;\s*\}/);
  });

  it('generates declaration utilities from a declaration map', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/utilities" as utility;

      $positioning-values: (
        absolute: (position: absolute),
        inset-x-0: (left: 0, right: 0)
      );

      @include utility.generate-declaration-utilities($positioning-values);
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /\.absolute\s*\{\s*position:\s*absolute;\s*\}/);
    assert.match(result.css, /\.inset-x-0\s*\{\s*left:\s*0;\s*right:\s*0;\s*\}/);
  });

  it('generates no-print utility through helper mixin', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/utilities" as utility;

      @include utility.generate-print-hidden-utility('no-print');
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /@media print\s*\{\s*\.no-print\s*\{\s*display:\s*none\s*!important;\s*\}\s*\}/);
  });

  it('generates responsive utilities for both property and declaration maps', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/responsive-utilities" as responsive;

      $utilities: (
        display: (
          property: 'display',
          values: (flex: flex)
        ),
        positioning: (
          values: (
            absolute: (position: absolute),
            inset-x-0: (left: 0, right: 0)
          )
        )
      );

      @include responsive.generate-all-breakpoint-utilities($utilities);
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /@media \(min-width:\s*320px\)\s*\{[\s\S]*?\.sm\\:flex\s*\{\s*display:\s*flex;\s*\}/);
    assert.match(result.css, /@media \(min-width:\s*320px\)\s*\{[\s\S]*?\.sm\\:absolute\s*\{\s*position:\s*absolute;\s*\}/);
    assert.match(result.css, /@media \(min-width:\s*320px\)\s*\{[\s\S]*?\.sm\\:inset-x-0\s*\{\s*left:\s*0;\s*right:\s*0;\s*\}/);
  });

  it('supports breakpoint-specific override maps', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/responsive-utilities" as responsive;

      $utilities: (
        display: (
          property: 'display',
          values: (flex: flex),
          breakpoint-values: (
            sm: (grid: grid),
            md: ()
          )
        )
      );

      @include responsive.generate-all-breakpoint-utilities($utilities);
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /@media \(min-width:\s*320px\)\s*\{[\s\S]*?\.sm\\:grid\s*\{\s*display:\s*grid;\s*\}/);
    assert.doesNotMatch(result.css, /\.sm\\:flex\s*\{\s*display:\s*flex;\s*\}/);
    assert.doesNotMatch(result.css, /@media \(min-width:\s*768px\)\s*\{[\s\S]*?\.md\\:/);
    assert.match(result.css, /@media \(min-width:\s*1024px\)\s*\{[\s\S]*?\.lg\\:flex\s*\{\s*display:\s*flex;\s*\}/);
  });

  it('registers shadow and grid responsive utilities through shared maps', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/responsive-utilities" as responsive;
      @use "src/utilities/core/layout/grid" as grid;
      @use "src/utilities/core/visual/shadows" as shadows;

      $utilities: (
        grid: (
          breakpoint-values: grid.$grid-responsive-utilities
        ),
        shadows: (
          property: 'box-shadow',
          values: shadows.$shadow-values
        )
      );

      @include responsive.generate-all-breakpoint-utilities($utilities);
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /\.sm\\:shadow\s*\{\s*box-shadow:\s*var\(--shadow-base\);\s*\}/);
    assert.match(result.css, /\.sm\\:grid\s*\{\s*display:\s*grid;\s*\}/);
    assert.match(result.css, /\.md\\:grid-cols-7\s*\{\s*grid-template-columns:\s*repeat\(7, minmax\(0, 1fr\)\);\s*\}/);
    assert.match(result.css, /\.sm\\:col-span-6\s*\{\s*grid-column:\s*span 6\s*\/\s*span 6;\s*\}/);
  });

  it('registers border responsive utilities with xxl-specific rounded variants', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/responsive-utilities" as responsive;
      @use "src/utilities/core/visual/borders" as borders;

      $utilities: (
        borders: (
          breakpoint-values: borders.$border-responsive-utilities
        )
      );

      @include responsive.generate-all-breakpoint-utilities($utilities);
      `,
      { loadPaths: [process.cwd()] }
    );

    assert.match(result.css, /\.sm\\:border\s*\{\s*border-width:\s*var\(--border-width-default\);\s*\}/);
    assert.match(result.css, /\.lg\\:rounded-full\s*\{\s*border-radius:\s*var\(--border-radius-full\);\s*\}/);
    assert.doesNotMatch(result.css, /\.sm\\:rounded-tl-full\s*\{/);
    assert.match(result.css, /\.xxl\\:rounded-tl-full\s*\{\s*border-top-left-radius:\s*var\(--border-radius-full\);\s*\}/);
    assert.match(result.css, /\.xxl\\:rounded-r-lg\s*\{\s*border-top-right-radius:\s*var\(--border-radius-lg\);\s*border-bottom-right-radius:\s*var\(--border-radius-lg\);\s*\}/);
  });
});
