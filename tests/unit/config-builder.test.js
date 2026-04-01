import assert from 'node:assert/strict';

import { defaultConfig, generateSCSS, mergeDeep, validateUserConfig } from '../../tools/config-builder.js';

describe('config-builder validation', () => {
  it('rejects non-object config roots', () => {
    const result = validateUserConfig('invalid');

    assert.equal(result.warnings.length, 0);
    assert.equal(result.errors.length, 1);
    assert.match(result.errors[0], /Configuration root must be an object/);
  });

  it('reports hard errors for invalid feature toggle types', () => {
    const result = validateUserConfig({
      features: {
        display: 'yes'
      }
    });

    assert.equal(result.errors.length > 0, true);
    assert.equal(
      result.errors.some(error => error.includes('features.display')),
      true
    );
  });

  it('warns for unknown top-level keys', () => {
    const result = validateUserConfig({
      unexpectedSection: {
        value: true
      }
    });

    assert.equal(result.warnings.length > 0, true);
    assert.equal(
      result.warnings.some(warning => warning.includes('unexpectedSection')),
      true
    );
  });

  it('allows extensible spacing keys without warnings', () => {
    const result = validateUserConfig({
      spacing: {
        128: '32rem'
      }
    });

    assert.equal(result.errors.length, 0);
    assert.equal(result.warnings.length, 0);
  });

  it('reports nested type mismatches for known config keys', () => {
    const result = validateUserConfig({
      breakpoints: {
        sm: 320
      }
    });

    assert.equal(result.errors.length > 0, true);
    assert.equal(
      result.errors.some(error => error.includes('breakpoints.sm')),
      true
    );
  });

  it('warns for unknown feature toggles', () => {
    const result = validateUserConfig({
      features: {
        madeUp: true
      }
    });

    assert.equal(result.errors.length, 0);
    assert.equal(
      result.warnings.some(warning => warning.includes('features.madeUp')),
      true
    );
  });
});

describe('mergeDeep', () => {
  it('preserves defaults while applying overrides', () => {
    const merged = mergeDeep(defaultConfig, {
      features: {
        display: false
      },
      breakpoints: {
        sm: '360px'
      }
    });

    assert.equal(merged.features.display, false);
    assert.equal(merged.features.grid, true);
    assert.equal(merged.breakpoints.sm, '360px');
    assert.equal(merged.breakpoints.md, defaultConfig.breakpoints.md);
  });

  it('adds new nested keys without discarding existing defaults', () => {
    const merged = mergeDeep(defaultConfig, {
      breakpoints: {
        tablet: '900px'
      },
      colors: {
        extended: {
          brand: {
            hue: 200,
            chroma: 0.12
          }
        }
      }
    });

    assert.equal(merged.breakpoints.tablet, '900px');
    assert.deepEqual(merged.colors.extended.brand, {
      hue: 200,
      chroma: 0.12
    });
    assert.deepEqual(merged.colors.primary, defaultConfig.colors.primary);
  });
});

describe('generateSCSS', () => {
  it('emits merged feature toggles and breakpoint aliases', () => {
    const scss = generateSCSS({
      features: {
        display: false
      },
      breakpoints: {
        tablet: '900px'
      }
    });

    assert.match(scss, /\$enable-display: false !default; \/\/ disabled/);
    assert.match(scss, /\$enable-grid: true !default; \/\/ enabled/);
    assert.match(scss, /\$breakpoint-tablet: 900px !default;/);
    assert.match(scss, /tablet: 900px/);
    assert.match(scss, /\$breakpoint-class-names: \$breakpoint-prefixes !default;/);
  });

  it('quotes compound shadow values and reserved font weight keys', () => {
    const scss = generateSCSS({
      typography: {
        fontWeight: {
          black: '950'
        }
      },
      shadows: {
        fancy: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      }
    });

    assert.match(scss, /"black": 950/);
    assert.match(
      scss,
      /"fancy": "0 10px 15px -3px rgb\(0 0 0 \/ 0\.1\), 0 4px 6px -4px rgb\(0 0 0 \/ 0\.1\)"/
    );
  });

  it('emits extended color scales and semantic aliases', () => {
    const scss = generateSCSS({
      colors: {
        extended: {
          brand: {
            hue: 200,
            chroma: 0.12
          }
        }
      }
    });

    assert.match(scss, /\$color-brand-50: oklch\(95% 0\.12 200deg\) !default;/);
    assert.match(scss, /\$color-brand-500: oklch\(62% 0\.12 200deg\) !default;/);
    assert.match(scss, /\$color-primary: \$color-primary-500 !default;/);
    assert.match(scss, /\$color-success: \$color-success-500 !default;/);
  });
});
