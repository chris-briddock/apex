#!/usr/bin/env node
// ============================================================================
// Utility Generator Script - Generates new utility classes
// ============================================================================

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

const help = `
Usage: node generate.js <command> [options]

Commands:
  utility <name> <property> <value>  Generate a new utility class
  color <name> <hex>                 Add a new color to the palette
  spacing <name> <value>             Add a new spacing value
  breakpoint <name> <value>           Add a new breakpoint

Examples:
  node generate.js utility my-utility color red
  node generate.js color brand-blue #3b82f6
  node generate.js spacing 20 1.25rem
  node generate.js breakpoint lg 1024px
`;

if (!command || command === 'help') {
  console.log(help);
  process.exit(0);
}

const generateUtility = (name, property, value) => {
  const utilDir = path.join(__dirname, '..', 'src', 'core');
  const utilFile = path.join(utilDir, '_custom.scss');

  const utilClass = `.${name} {
  ${property}: ${value};
}
`;

  fs.appendFileSync(utilFile, utilClass);
  console.log(`✅ Generated utility class: .${name}`);
};

const addColor = (name, hex) => {
  const varsFile = path.join(__dirname, '..', 'src', 'base', '_variables.scss');

  const colorEntry = `
$color-${name}: ${hex};
`;

  fs.appendFileSync(varsFile, colorEntry);
  console.log(`✅ Added color: ${name} = ${hex}`);
};

const addSpacing = (name, value) => {
  const varsFile = path.join(__dirname, '..', 'src', 'base', '_variables.scss');

  const spacingEntry = `
$spacing-${name}: ${value};
`;

  fs.appendFileSync(varsFile, spacingEntry);
  console.log(`✅ Added spacing: ${name} = ${value}`);
};

const addBreakpoint = (name, value) => {
  const bpFile = path.join(__dirname, '..', 'src', 'config', '_breakpoints.scss');

  const bpEntry = `
$${name}: ${value};
`;

  fs.appendFileSync(bpFile, bpEntry);
  console.log(`✅ Added breakpoint: ${name} = ${value}`);
};

switch (command) {
  case 'utility':
    if (args.length < 4) {
      console.error('❌ Error: utility command requires 3 arguments');
      console.log('Usage: node generate.js utility <name> <property> <value>');
      process.exit(1);
    }
    generateUtility(args[1], args[2], args[3]);
    break;

  case 'color':
    if (args.length < 3) {
      console.error('❌ Error: color command requires 2 arguments');
      console.log('Usage: node generate.js color <name> <hex>');
      process.exit(1);
    }
    addColor(args[1], args[2]);
    break;

  case 'spacing':
    if (args.length < 3) {
      console.error('❌ Error: spacing command requires 2 arguments');
      console.log('Usage: node generate.js spacing <name> <value>');
      process.exit(1);
    }
    addSpacing(args[1], args[2]);
    break;

  case 'breakpoint':
    if (args.length < 3) {
      console.error('❌ Error: breakpoint command requires 2 arguments');
      console.log('Usage: node generate.js breakpoint <name> <value>');
      process.exit(1);
    }
    addBreakpoint(args[1], args[2]);
    break;

  default:
    console.error(`❌ Unknown command: ${command}`);
    console.log(help);
    process.exit(1);
}