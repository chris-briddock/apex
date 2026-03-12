import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const scriptPath = path.resolve(process.cwd(), 'tools/generate.js');

function runGenerator(args) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
}

async function withTempProject(callback) {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'apex-generate-'));
  const utilitiesDir = path.join(tempDir, 'src', 'utilities', 'core');

  await fs.mkdir(utilitiesDir, { recursive: true });
  await fs.writeFile(path.join(utilitiesDir, '_index.scss'), "@forward 'responsive';\n", 'utf8');
  await fs.writeFile(
    path.join(tempDir, 'apex.config.js'),
    `export default {
  breakpoints: {
    sm: '320px'
  },
  spacing: {
    1: '0.25rem'
  },
  colors: {
    extended: {
      blue: { hue: 250, chroma: 0.18 }
    }
  }
};
`,
    'utf8'
  );

  try {
    await callback(tempDir);
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

describe('generate cli', () => {
  it('prints help and exits successfully', () => {
    const result = runGenerator(['--help']);

    assert.equal(result.status, 0);
    assert.match(result.stdout, /Usage: node generate\.js/);
    assert.match(result.stdout, /--root=<dir>/);
  });

  it('fails fast for unknown commands', () => {
    const result = runGenerator(['unknown-command']);

    assert.equal(result.status, 1);
    assert.match(result.stderr, /Unknown command/);
  });

  it('creates a custom utility file and forwards it from the core index', async () => {
    await withTempProject(async tempDir => {
      const result = runGenerator([
        'utility',
        'text-balance',
        'text-wrap',
        'balance',
        `--root=${tempDir}`
      ]);

      assert.equal(result.status, 0, result.stderr || result.stdout);

      const customUtilityFile = await fs.readFile(
        path.join(tempDir, 'src', 'utilities', 'core', '_custom.scss'),
        'utf8'
      );
      const coreIndex = await fs.readFile(
        path.join(tempDir, 'src', 'utilities', 'core', '_index.scss'),
        'utf8'
      );

      assert.match(customUtilityFile, /\.text-balance\s*\{\s*text-wrap:\s*balance;/);
      assert.match(coreIndex, /@forward 'custom';/);
    });
  });

  it('updates spacing, breakpoint, and color config sections', async () => {
    await withTempProject(async tempDir => {
      const spacingResult = runGenerator(['spacing', '20', '5rem', `--root=${tempDir}`]);
      const breakpointResult = runGenerator(['breakpoint', 'tablet', '900px', `--root=${tempDir}`]);
      const colorResult = runGenerator(['color', 'brand', '#3b82f6', `--root=${tempDir}`]);

      assert.equal(spacingResult.status, 0, spacingResult.stderr || spacingResult.stdout);
      assert.equal(breakpointResult.status, 0, breakpointResult.stderr || breakpointResult.stdout);
      assert.equal(colorResult.status, 0, colorResult.stderr || colorResult.stdout);

      const config = await fs.readFile(path.join(tempDir, 'apex.config.js'), 'utf8');

      assert.match(config, /20: '5rem',/);
      assert.match(config, /tablet: '900px',/);
      assert.match(config, /brand: \{ hue: \d+, chroma: 0\.\d+ \},/);
    });
  });
});
