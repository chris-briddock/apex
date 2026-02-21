#!/usr/bin/env node

'use strict'

/**
 * PostCSS Plugin for Arbitrary Value Support
 * ============================================================================
 * This plugin enables Tailwind-style arbitrary value syntax in CSS classes.
 * Classes like min-h-[200px], text-[#ff0000], w-[100px], etc. are parsed
 * and converted to valid CSS.
 *
 * Usage:
 *   min-h-[200px]       -> min-height: 200px
 *   w-[100px]           -> width: 100px
 *   text-[#ff0000]      -> color: #ff0000
 *   bg-[rgb(0,0,0)]     -> background-color: rgb(0,0,0)
 *   m-[10px]            -> margin: 10px
 *   p-[1rem]            -> padding: 1rem
 *   top-[50%]           -> top: 50%
 *   left-[var(--x)]     -> left: var(--x)
 *
 * Supports responsive prefixes:
 *   md:min-h-[200px]    -> @media (min-width: 768px) { .md\:min-h-\[200px\] { min-height: 200px } }
 *
 * Supports negative values:
 *   -mt-[10px]          -> margin-top: -10px
 *   -left-[50%]         -> left: -50%
 */

import postcss from 'postcss';

/**
 * Utility property mappings
 * Maps class prefixes to CSS properties
 */
const propertyMappings = {
  // Sizing
  'w': 'width',
  'h': 'height',
  'min-w': 'min-width',
  'min-h': 'min-height',
  'max-w': 'max-width',
  'max-h': 'max-height',

  // Spacing (margin)
  'm': 'margin',
  'mt': 'margin-top',
  'mr': 'margin-right',
  'mb': 'margin-bottom',
  'ml': 'margin-left',
  'mx': ['margin-left', 'margin-right'],
  'my': ['margin-top', 'margin-bottom'],

  // Spacing (padding)
  'p': 'padding',
  'pt': 'padding-top',
  'pr': 'padding-right',
  'pb': 'padding-bottom',
  'pl': 'padding-left',
  'px': ['padding-left', 'padding-right'],
  'py': ['padding-top', 'padding-bottom'],

  // Positioning
  'top': 'top',
  'right': 'right',
  'bottom': 'bottom',
  'left': 'left',
  'inset': ['top', 'right', 'bottom', 'left'],
  'inset-x': ['left', 'right'],
  'inset-y': ['top', 'bottom'],

  // Colors
  'text': 'color',
  'bg': 'background-color',
  'border': 'border-color',

  // Border width
  'border-t': 'border-top-width',
  'border-r': 'border-right-width',
  'border-b': 'border-bottom-width',
  'border-l': 'border-left-width',
  'border-w': 'border-width',

  // Border radius
  'rounded': 'border-radius',
  'rounded-t': ['border-top-left-radius', 'border-top-right-radius'],
  'rounded-r': ['border-top-right-radius', 'border-bottom-right-radius'],
  'rounded-b': ['border-bottom-right-radius', 'border-bottom-left-radius'],
  'rounded-l': ['border-top-left-radius', 'border-bottom-left-radius'],
  'rounded-tl': 'border-top-left-radius',
  'rounded-tr': 'border-top-right-radius',
  'rounded-br': 'border-bottom-right-radius',
  'rounded-bl': 'border-bottom-left-radius',

  // Typography
  'text': 'font-size',
  'leading': 'line-height',
  'tracking': 'letter-spacing',

  // Transforms
  'translate-x': '--tw-translate-x',
  'translate-y': '--tw-translate-y',
  'rotate': '--tw-rotate',
  'scale': '--tw-scale',
  'scale-x': '--tw-scale-x',
  'scale-y': '--tw-scale-y',

  // Z-index
  'z': 'z-index',

  // Flex/Gap
  'gap': 'gap',
  'gap-x': 'column-gap',
  'gap-y': 'row-gap',

  // Grid
  'grid-cols': 'grid-template-columns',
  'grid-rows': 'grid-template-rows',
  'col-span': 'grid-column',
  'row-span': 'grid-row',

  // Opacity
  'opacity': 'opacity',

  // Shadows
  'shadow': 'box-shadow',

  // Transitions
  'duration': 'transition-duration',
  'delay': 'transition-delay',

  // Line clamp
  'line-clamp': '-webkit-line-clamp',

  // Scroll margin/padding
  'scroll-m': 'scroll-margin',
  'scroll-mt': 'scroll-margin-top',
  'scroll-mr': 'scroll-margin-right',
  'scroll-mb': 'scroll-margin-bottom',
  'scroll-ml': 'scroll-margin-left',
  'scroll-p': 'scroll-padding',
  'scroll-pt': 'scroll-padding-top',
  'scroll-pr': 'scroll-padding-right',
  'scroll-pb': 'scroll-padding-bottom',
  'scroll-pl': 'scroll-padding-left',

  // Width/Height with content keywords
  'basis': 'flex-basis',

  // Other
  'order': 'order',
  'flex': 'flex',
  'grow': 'flex-grow',
  'shrink': 'flex-shrink',
};

/**
 * Breakpoint mappings
 */
const breakpoints = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  'xxl': '1536px',
  '2xl': '1536px',
};

/**
 * Extract value from bracket notation
 * Supports:
 *   - [200px]
 *   - [#ff0000]
 *   - [rgb(0,0,0)]
 *   - [calc(100%-20px)]
 *   - [var(--custom)]
 *   - [theme(colors.primary.500)]
 *   - [#00000050] (with opacity)
 */
function extractBracketValue(className) {
  const match = className.match(/\[([^\]]+)\]/);
  return match ? match[1] : null;
}

/**
 * Parse a class name to extract prefix, value, and modifiers
 * Returns: { prefix, value, isNegative, responsivePrefix, statePrefix }
 */
function parseClassName(className) {
  // Remove the dot if present
  const cleanClass = className.startsWith('.') ? className.slice(1) : className;

  let result = {
    prefix: '',
    value: '',
    isNegative: false,
    responsivePrefix: null,
    statePrefix: null,
    original: cleanClass
  };

  let workingClass = cleanClass;

  // Check for negative prefix (e.g., -mt-[10px])
  if (workingClass.startsWith('-')) {
    result.isNegative = true;
    workingClass = workingClass.slice(1);
  }

  // Check for responsive/state prefix (e.g., md:min-h-[200px], hover:bg-[red])
  const prefixMatch = workingClass.match(/^([\w-]+):(.*)/);
  if (prefixMatch) {
    const potentialPrefix = prefixMatch[1];
    const rest = prefixMatch[2];

    // Check if it's a responsive breakpoint
    if (breakpoints[potentialPrefix]) {
      result.responsivePrefix = potentialPrefix;
    } else {
      // It's a state prefix (hover, focus, active, etc.)
      result.statePrefix = potentialPrefix;
    }
    workingClass = rest;
  }

  // Check for double prefix (e.g., md:hover:bg-[red])
  if (result.responsivePrefix && workingClass.includes(':')) {
    const secondPrefixMatch = workingClass.match(/^([\w-]+):(.*)/);
    if (secondPrefixMatch) {
      result.statePrefix = secondPrefixMatch[1];
      workingClass = secondPrefixMatch[2];
    }
  }

  // Extract the bracket value
  const bracketValue = extractBracketValue(workingClass);
  if (!bracketValue) {
    return null;
  }

  result.value = bracketValue;

  // Get the prefix before the bracket
  const prefixMatch2 = workingClass.match(/^([\w-]+)-\[/);
  if (prefixMatch2) {
    result.prefix = prefixMatch2[1];
  } else if (workingClass.startsWith('[')) {
    // Direct bracket notation without prefix (e.g., [.class])
    // Not supported for arbitrary values
    return null;
  }

  return result;
}

/**
 * Generate CSS value from bracket content
 * Handles theme() function and other special syntax
 */
function generateCSSValue(value) {
  // Handle theme() function: theme(colors.primary.500)
  if (value.startsWith('theme(')) {
    const themePath = value.slice(6, -1); // Remove theme( and )
    const parts = themePath.split('.');
    // Convert to CSS variable: --apex-primary-500
    if (parts[0] === 'colors' && parts.length >= 2) {
      return `var(--apex-${parts.slice(1).join('-')})`;
    }
    // Fallback to the original value wrapped in var
    return `var(--apex-${parts.join('-')})`;
  }

  // Handle calc() - ensure proper spacing
  if (value.startsWith('calc(')) {
    return value;
  }

  // Handle var() - pass through
  if (value.startsWith('var(')) {
    return value;
  }

  // Handle color with opacity (e.g., #00000050)
  if (/^#[0-9a-fA-F]{8}$/.test(value)) {
    const hex = value.slice(0, 7);
    const alpha = parseInt(value.slice(7, 9), 16) / 255;
    return hex;
  }

  // Default: return as-is
  return value;
}

/**
 * Generate CSS property declarations
 */
function generateDeclarations(prefix, value, isNegative) {
  const properties = propertyMappings[prefix];
  if (!properties) {
    return null;
  }

  const cssValue = generateCSSValue(value);
  const finalValue = isNegative ? `-${cssValue}` : cssValue;

  const declarations = [];
  const props = Array.isArray(properties) ? properties : [properties];

  for (const prop of props) {
    // Handle CSS custom properties (for transforms)
    if (prop.startsWith('--')) {
      declarations.push({ property: prop, value: finalValue });
    } else {
      declarations.push({ property: prop, value: finalValue });
    }
  }

  return declarations;
}

/**
 * Generate the CSS class name with proper escaping
 */
function generateClassName(parsed) {
  let className = '';

  if (parsed.responsivePrefix) {
    className += `${parsed.responsivePrefix}:`;
  }

  if (parsed.statePrefix) {
    className += `${parsed.statePrefix}:`;
  }

  if (parsed.isNegative) {
    className += '-';
  }

  className += `${parsed.prefix}-[${parsed.value}]`;

  // Escape special characters for CSS
  return className.replace(/:/g, '\\:').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

/**
 * Create the PostCSS plugin
 */
function arbitraryValues(options = {}) {
  const opts = {
    includeResponsive: true,
    includeStates: ['hover', 'focus', 'active', 'disabled', 'visited', 'focus-within', 'focus-visible'],
    customProperties: {},
    ...options
  };

  return {
    postcssPlugin: 'postcss-arbitrary-values',
    Root(root, { result }) {
      // Process each rule that might contain arbitrary value classes
      root.walkRules(rule => {
        const selector = rule.selector;

        // Check if this selector contains arbitrary value patterns
        if (!selector.includes('[') || !selector.includes(']')) {
          return;
        }

        // Parse the class name from the selector
        // This handles simple cases - more complex selectors need additional handling
        const classMatch = selector.match(/\.([\w\-\[\]:]+)/);
        if (!classMatch) return;

        const fullClassName = classMatch[1];

        // Check if this is an arbitrary value class
        if (!fullClassName.includes('[')) return;

        const parsed = parseClassName(fullClassName);
        if (!parsed) return;

        const declarations = generateDeclarations(parsed.prefix, parsed.value, parsed.isNegative);
        if (!declarations) return;

        // Generate the escaped class name
        const escapedClassName = generateClassName(parsed);

        // Update the selector
        rule.selector = selector.replace(fullClassName, escapedClassName);

        // Add declarations if rule is empty
        if (rule.nodes.length === 0) {
          for (const decl of declarations) {
            rule.append({ prop: decl.property, value: decl.value });
          }
        }
      });
    },

    // Also process at-rules for responsive variants
    AtRule(atRule, { postcss }) {
      // Handle responsive at-rules if needed
    }
  };
}

arbitraryValues.postcss = true;

/**
 * Generate utility classes for HTML/JSX scanning
 * This is the main export for use as a PostCSS plugin
 */
function arbitraryValuesPlugin(options = {}) {
  return {
    postcssPlugin: 'apexcss-arbitrary-values',

    async Once(root, { result }) {
      const classes = new Map();

      // Find all potential arbitrary value patterns in the CSS
      // This is a simplified approach - a full implementation would scan HTML/JSX files

      // Add base arbitrary value support
      // We'll add placeholder rules that can be used
      const placeholderComment = postcss.comment({
        text: ' Arbitrary value classes will be generated here '
      });

      // Insert at the end of the file
      root.append(placeholderComment);
    }
  };
}

arbitraryValuesPlugin.postcss = true;

/**
 * Generate utility class from parsed result
 */
function generateUtilityRule(parsed, escapedClassName) {
  const declarations = generateDeclarations(parsed.prefix, parsed.value, parsed.isNegative);
  if (!declarations) return null;

  let rule;

  // Handle responsive prefix
  if (parsed.responsivePrefix) {
    const bpValue = breakpoints[parsed.responsivePrefix];
    rule = postcss.atRule({
      name: 'media',
      params: `(min-width: ${bpValue})`
    });

    const innerRule = postcss.rule({
      selector: `.${escapedClassName}`
    });

    for (const decl of declarations) {
      innerRule.append({
        prop: decl.property,
        value: decl.value
      });
    }

    rule.append(innerRule);
  } else {
    rule = postcss.rule({
      selector: `.${escapedClassName}`
    });

    for (const decl of declarations) {
      rule.append({
        prop: decl.property,
        value: decl.value
      });
    }
  }

  return rule;
}

/**
 * Main plugin factory
 */
export default function createArbitraryValuesPlugin(options = {}) {
  const seenClasses = new Set();

  return {
    postcssPlugin: 'apexcss-arbitrary-values',

    Root(root, { postcss }) {
      // This plugin works by:
      // 1. Looking for special comments indicating arbitrary value usage
      // 2. Or processing inline styles that reference arbitrary values

      // For now, we'll add a mechanism to generate classes from comments
      root.walkComments(comment => {
        const match = comment.text.match(/arbitrary:\s*(.+)/);
        if (match) {
          const classNames = match[1].split(/\s+/);

          for (const className of classNames) {
            if (seenClasses.has(className)) continue;
            seenClasses.add(className);

            const parsed = parseClassName(className);
            if (!parsed) continue;

            const escapedClassName = generateClassName(parsed);
            const rule = generateUtilityRule(parsed, escapedClassName, postcss);

            if (rule) {
              comment.before(rule);
            }
          }

          // Remove the comment after processing
          comment.remove();
        }
      });
    }
  };
}

createArbitraryValuesPlugin.postcss = true;

// Export utilities for use in other tools
export {
  propertyMappings,
  breakpoints,
  parseClassName,
  generateCSSValue,
  generateDeclarations,
  generateClassName,
  generateUtilityRule
};
