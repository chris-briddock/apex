import assert from 'node:assert/strict';

import { defaultConfig, mergeDeep, validateUserConfig } from '../../tools/config-builder.js';

describe('config-builder validation', () => {
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
});
