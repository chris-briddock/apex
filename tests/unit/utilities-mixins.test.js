import assert from 'node:assert/strict';

import * as sass from 'sass';

describe('utilities mixins', () => {
  describe('generate-declaration-utilities', () => {
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

    it('supports custom class prefix', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        $utilities: (
          center: (justify-content: center, align-items: center)
        );

        @include utility.generate-declaration-utilities($utilities, 'flex-');
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /\.flex-center\s*\{\s*justify-content:\s*center;\s*align-items:\s*center;\s*\}/);
    });
  });

  describe('generate-utility-map', () => {
    it('generates utilities with prefix', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        $utilities: (
          'transition-none': (transition: none)
        );

        @include utility.generate-utility-map($utilities, $prefix: 'motion-reduce');
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /\.motion-reduce-transition-none\s*\{\s*transition:\s*none;\s*\}/);
    });

    it('generates utilities without prefix when prefix is empty', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        $utilities: (
          'hidden': (display: none)
        );

        @include utility.generate-utility-map($utilities);
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /\.hidden\s*\{\s*display:\s*none;\s*\}/);
    });
  });

  describe('generate-responsive-declaration-utilities', () => {
    it('generates responsive utilities at specified breakpoints', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        $utilities: (
          flex: (display: flex),
          hidden: (display: none)
        );

        $breakpoints: (
          sm: 640px,
          md: 768px
        );

        @include utility.generate-responsive-declaration-utilities($utilities, $breakpoints);
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@media \(min-width:\s*640px\)\s*\{[\s\S]*?\.sm\\:flex\s*\{\s*display:\s*flex;\s*\}/);
      assert.match(result.css, /@media \(min-width:\s*768px\)\s*\{[\s\S]*?\.md\\:hidden\s*\{\s*display:\s*none;\s*\}/);
    });

    it('generates multiple utilities per breakpoint', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        $utilities: (
          grid: (display: grid),
          cols-2: (grid-template-columns: repeat(2, 1fr))
        );

        $breakpoints: (
          lg: 1024px
        );

        @include utility.generate-responsive-declaration-utilities($utilities, $breakpoints);
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@media \(min-width:\s*1024px\)\s*\{[\s\S]*?\.lg\\:grid\s*\{\s*display:\s*grid;\s*\}/);
      assert.match(result.css, /\.lg\\:cols-2\s*\{\s*grid-template-columns:\s*repeat\(2, 1fr\);\s*\}/);
    });
  });

  describe('keyframe-animations', () => {
    it('generates standard keyframe animations', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        @include utility.keyframe-animations();
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@keyframes spin\s*\{/);
      assert.match(result.css, /@keyframes ping\s*\{/);
      assert.match(result.css, /@keyframes pulse\s*\{/);
      assert.match(result.css, /@keyframes bounce\s*\{/);
    });

    it('spin animation rotates from 0 to 360 degrees', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        @include utility.keyframe-animations();
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@keyframes spin\s*\{[\s\S]*?from\s*\{\s*transform:\s*rotate\(0deg\);\s*\}/);
      assert.match(result.css, /to\s*\{\s*transform:\s*rotate\(360deg\);\s*\}/);
    });

    it('ping animation scales and fades', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        @include utility.keyframe-animations();
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@keyframes ping\s*\{[\s\S]*?transform:\s*scale\(2\)/);
      assert.match(result.css, /opacity:\s*0/);
    });

    it('pulse animation modifies opacity', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        @include utility.keyframe-animations();
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@keyframes pulse\s*\{[\s\S]*?opacity:\s*1/);
      assert.match(result.css, /opacity:\s*0\.5/);
    });

    it('bounce animation translates vertically', () => {
      const result = sass.compileString(
        `
        @use "src/mixins/utilities" as utility;

        @include utility.keyframe-animations();
        `,
        { loadPaths: [process.cwd()] }
      );

      assert.match(result.css, /@keyframes bounce\s*\{[\s\S]*?transform:\s*translateY\(-25%\)/);
      assert.match(result.css, /transform:\s*translateY\(0\)/);
    });
  });
});

describe('dark-mode mixin', () => {
  it('generates dark mode utilities for both system preference and manual toggle', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/dark-mode" as dark;

      @include dark.dark-mode {
        .dark\\:text-white {
          color: white;
        }
      }
      `,
      { loadPaths: [process.cwd()] }
    );

    // System preference (media query)
    assert.match(result.css, /@media \(prefers-color-scheme:\s*dark\)\s*\{/);

    // Manual toggle (class selector)
    assert.match(result.css, /\.dark\s+\.dark\\:text-white\s*\{\s*color:\s*white;\s*\}/);
  });

  it('applies content to both media query and class selector', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/dark-mode" as dark;

      @include dark.dark-mode {
        .dark\\:bg-gray-900 {
          background-color: #111827;
        }
      }
      `,
      { loadPaths: [process.cwd()] }
    );

    // Count occurrences - should appear twice (once in media, once in .dark)
    const matches = result.css.match(/\.dark\\:bg-gray-900\s*\{\s*background-color:\s*#111827;\s*\}/g);
    assert.strictEqual(matches?.length, 2);
  });

  it('nests selectors properly under .dark class', () => {
    const result = sass.compileString(
      `
      @use "src/mixins/dark-mode" as dark;

      @include dark.dark-mode {
        .dark\\:border-gray-700 {
          border-color: #374151;
        }
      }
      `,
      { loadPaths: [process.cwd()] }
    );

    // The .dark class should be a parent selector
    assert.match(result.css, /\.dark\s+\.dark\\:border-gray-700/);
  });
});
