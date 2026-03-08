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
});
