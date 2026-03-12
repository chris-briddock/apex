#!/usr/bin/env node
// ============================================================================
// Utility Generator Script - Generates new utility classes and config entries
// ============================================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

const HELP = `
Usage: node generate.js <command> [options]

Commands:
  utility <name> <property> <value>  Generate a new utility class
  color <name> <hex>                 Add a new extended color seed to apex.config.js
  spacing <name> <value>             Add a new spacing value to apex.config.js
  breakpoint <name> <value>          Add a new breakpoint to apex.config.js

Options:
  --root=<dir>                       Project root to update (default: current working directory)
  --help, -h                         Show help

Examples:
  node generate.js utility my-utility color red
  node generate.js color brand-blue #3b82f6
  node generate.js spacing 20 1.25rem
  node generate.js breakpoint lg 1024px
`;

function parseCliArgs(argv) {
  const options = {
    root: process.cwd(),
    help: false,
    positional: []
  };

  argv.slice(2).forEach(arg => {
    if (arg === '--help' || arg === '-h' || arg === 'help') {
      options.help = true;
    } else if (arg.startsWith('--root=')) {
      options.root = path.resolve(arg.slice('--root='.length));
    } else {
      options.positional.push(arg);
    }
  });

  return options;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatObjectKey(key) {
  if (/^[$A-Z_a-z][$\w]*$/.test(key) || /^\d+(?:\.\d+)?$/.test(key)) {
    return key;
  }

  return JSON.stringify(key);
}

function findMatchingBrace(source, openIndex) {
  let depth = 0;

  for (let index = openIndex; index < source.length; index += 1) {
    if (source[index] === '{') {
      depth += 1;
    } else if (source[index] === '}') {
      depth -= 1;

      if (depth === 0) {
        return index;
      }
    }
  }

  throw new Error('Could not find matching closing brace.');
}

function blockHasKey(blockContent, key) {
  const escapedKey = escapeRegExp(key);
  const pattern = new RegExp(`^\\s*(?:${escapedKey}|"${escapedKey}"|'${escapedKey}')\\s*:`, 'm');
  return pattern.test(blockContent);
}

function insertObjectEntry(source, marker, key, entryLine) {
  const markerIndex = source.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Could not find config section: ${marker}`);
  }

  const openIndex = source.indexOf('{', markerIndex);
  const closeIndex = findMatchingBrace(source, openIndex);
  const blockContent = source.slice(openIndex + 1, closeIndex);

  if (blockHasKey(blockContent, key)) {
    throw new Error(`Entry ${key} already exists in ${marker.trim()}.`);
  }

  return `${source.slice(0, closeIndex)}${entryLine}\n${source.slice(closeIndex)}`;
}

function normalizeHex(hex) {
  const trimmed = hex.trim().replace(/^#/, '');

  if (/^[0-9a-fA-F]{3}$/.test(trimmed)) {
    return trimmed
      .split('')
      .map(char => `${char}${char}`)
      .join('');
  }

  if (/^[0-9a-fA-F]{6}$/.test(trimmed)) {
    return trimmed;
  }

  throw new Error(`Invalid hex color: ${hex}`);
}

function hexToPaletteSeed(hex) {
  const normalizedHex = normalizeHex(hex);
  const r = parseInt(normalizedHex.slice(0, 2), 16) / 255;
  const g = parseInt(normalizedHex.slice(2, 4), 16) / 255;
  const b = parseInt(normalizedHex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let hue = 0;

  if (delta !== 0) {
    if (max === r) {
      hue = ((g - b) / delta) % 6;
    } else if (max === g) {
      hue = (b - r) / delta + 2;
    } else {
      hue = (r - g) / delta + 4;
    }
  }

  hue = Math.round((hue * 60 + 360) % 360);

  const lightness = (max + min) / 2;
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
  const chroma = Number(Math.max(0.02, Math.min(0.24, saturation * 0.22 + 0.02)).toFixed(2));

  return { hue, chroma };
}

async function ensureFile(filePath, initialContent = '') {
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, initialContent, 'utf8');
  }
}

async function appendCustomUtility(rootDir, name, property, value) {
  const utilityFile = path.join(rootDir, 'src', 'utilities', 'core', '_custom.scss');
  const coreIndexFile = path.join(rootDir, 'src', 'utilities', 'core', '_index.scss');
  const utilityBlock = `.${name} {\n  ${property}: ${value};\n}`;

  await ensureFile(
    utilityFile,
    '// ============================================================================\n' +
      '// Custom Utilities\n' +
      '// ============================================================================\n'
  );

  const currentUtilityContent = await fs.readFile(utilityFile, 'utf8');
  const utilityPrefix = currentUtilityContent.trim().length === 0 ? '' : '\n\n';
  await fs.writeFile(utilityFile, `${currentUtilityContent}${utilityPrefix}${utilityBlock}\n`, 'utf8');

  await ensureFile(coreIndexFile, '');
  const currentIndexContent = await fs.readFile(coreIndexFile, 'utf8');

  if (!currentIndexContent.includes("@forward 'custom';")) {
    const suffix = currentIndexContent.endsWith('\n') || currentIndexContent.length === 0 ? '' : '\n';
    await fs.writeFile(coreIndexFile, `${currentIndexContent}${suffix}@forward 'custom';\n`, 'utf8');
  }

  console.log(`Generated utility class: .${name}`);
}

async function updateApexConfig(rootDir, marker, key, entryLine) {
  const configFile = path.join(rootDir, 'apex.config.js');
  const configContent = await fs.readFile(configFile, 'utf8');
  const nextContent = insertObjectEntry(configContent, marker, key, entryLine);
  await fs.writeFile(configFile, nextContent, 'utf8');
}

async function addSpacing(rootDir, name, value) {
  await updateApexConfig(rootDir, 'spacing: {', name, `    ${formatObjectKey(name)}: '${value}',`);
  console.log(`Added spacing token: ${name} = ${value}`);
}

async function addBreakpoint(rootDir, name, value) {
  await updateApexConfig(rootDir, 'breakpoints: {', name, `    ${formatObjectKey(name)}: '${value}',`);
  console.log(`Added breakpoint: ${name} = ${value}`);
}

async function addColor(rootDir, name, hex) {
  const { hue, chroma } = hexToPaletteSeed(hex);
  await updateApexConfig(
    rootDir,
    'extended: {',
    name,
    `      ${formatObjectKey(name)}: { hue: ${hue}, chroma: ${chroma} },`
  );
  console.log(`Added extended color seed: ${name} from ${hex} (hue ${hue}, chroma ${chroma})`);
}

async function run(argv = process.argv) {
  const options = parseCliArgs(argv);
  const command = options.positional[0];
  const args = options.positional.slice(1);

  if (options.help || !command) {
    console.log(HELP);
    return 0;
  }

  try {
    switch (command) {
      case 'utility':
        if (args.length < 3) {
          console.error('Error: utility command requires 3 arguments');
          console.log('Usage: node generate.js utility <name> <property> <value>');
          return 1;
        }

        await appendCustomUtility(options.root, args[0], args[1], args[2]);
        return 0;

      case 'color':
        if (args.length < 2) {
          console.error('Error: color command requires 2 arguments');
          console.log('Usage: node generate.js color <name> <hex>');
          return 1;
        }

        await addColor(options.root, args[0], args[1]);
        return 0;

      case 'spacing':
        if (args.length < 2) {
          console.error('Error: spacing command requires 2 arguments');
          console.log('Usage: node generate.js spacing <name> <value>');
          return 1;
        }

        await addSpacing(options.root, args[0], args[1]);
        return 0;

      case 'breakpoint':
        if (args.length < 2) {
          console.error('Error: breakpoint command requires 2 arguments');
          console.log('Usage: node generate.js breakpoint <name> <value>');
          return 1;
        }

        await addBreakpoint(options.root, args[0], args[1]);
        return 0;

      default:
        console.error(`Unknown command: ${command}`);
        console.log(HELP);
        return 1;
    }
  } catch (error) {
    console.error(`Generator failed: ${error.message}`);
    return 1;
  }
}

function isDirectExecution() {
  if (!process.argv[1]) {
    return false;
  }

  return path.resolve(process.argv[1]) === __filename;
}

if (isDirectExecution()) {
  run().then(code => {
    process.exit(code);
  });
}

export {
  addBreakpoint,
  addColor,
  addSpacing,
  appendCustomUtility,
  hexToPaletteSeed,
  run
};
