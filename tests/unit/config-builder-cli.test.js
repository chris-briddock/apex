import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const scriptPath = path.resolve(process.cwd(), 'tools/config-builder.js');

function runConfigBuilder(args) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
}

async function withTempDir(callback) {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'apex-config-builder-'));

  try {
    await callback(tempDir);
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

describe('config-builder cli', () => {
  it('builds a config file into a custom output directory', async () => {
    await withTempDir(async tempDir => {
      const configPath = path.join(tempDir, 'apex.test.config.js');
      const outputDir = path.join(tempDir, 'generated');

      await fs.writeFile(
        configPath,
        `export default {
  features: {
    display: false
  },
  breakpoints: {
    tablet: '900px'
  }
};
`,
        'utf8'
      );

      const result = runConfigBuilder([
        `--config=${configPath}`,
        `--output=${outputDir}`
      ]);

      assert.equal(result.status, 0, result.stderr || result.stdout);

      const generated = await fs.readFile(path.join(outputDir, '_custom-config.scss'), 'utf8');
      assert.match(generated, /\$enable-display: false !default; \/\/ disabled/);
      assert.match(generated, /\$breakpoint-tablet: 900px !default;/);
    });
  });

  it('falls back to defaults when the config file is missing', async () => {
    await withTempDir(async tempDir => {
      const missingConfigPath = path.join(tempDir, 'missing.config.js');
      const outputDir = path.join(tempDir, 'defaults-output');

      const result = runConfigBuilder([
        `--config=${missingConfigPath}`,
        `--output=${outputDir}`
      ]);

      assert.equal(result.status, 0, result.stderr || result.stdout);
      assert.match(result.stdout, /using defaults/i);

      const generated = await fs.readFile(path.join(outputDir, '_custom-config.scss'), 'utf8');
      assert.match(generated, /\$enable-display: true !default; \/\/ enabled/);
    });
  });

  it('fails when the config export is not an object', async () => {
    await withTempDir(async tempDir => {
      const configPath = path.join(tempDir, 'invalid.config.js');
      const outputDir = path.join(tempDir, 'invalid-output');

      await fs.writeFile(configPath, `export default 'bad-config';\n`, 'utf8');

      const result = runConfigBuilder([
        `--config=${configPath}`,
        `--output=${outputDir}`
      ]);

      assert.equal(result.status, 1);
      assert.match(result.stderr, /Build failed/);
      assert.match(result.stderr, /Expected exported config object/);
    });
  });
});
