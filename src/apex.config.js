/**
 * ApexCSS Configuration File
 *
 * This is your configuration file for customizing ApexCSS.
 * All features are enabled by default. Set any feature to false to disable it
 * and reduce your bundle size.
 *
 * Usage:
 *   1. Modify the values below to customize the framework
 *   2. Run: npm run config:build
 *   3. The SCSS files will be regenerated with your customizations
 *
 */

export default {
  // ============================================================================
  // Dark Mode Strategy
  // ============================================================================
  // "media" = uses system preference (prefers-color-scheme)
  // "class" = uses .dark class on parent element
  darkModeStrategy: 'class',

  // ============================================================================
  // Feature Toggles - Enable/disable utility categories
  // ============================================================================
  features: {
// Core Layout
    display: true,
    flexbox: true,
    grid: true,
    positioning: true,
    visibility: true,

    // Core Spacing
    spacing: true,
    sizing: true,

    // Core Typography
    typography: true,

    // Core Visual
    colors: true,
    backgrounds: true,
    borders: true,
    shadows: true,
    opacity: true,
    overflow: true,
    objectFit: true,

    // Core Interaction
    cursor: true,
    transitions: true,

    // Extended Layout
    flexExtended: true,
    gridExtended: true,
    float: true,
    containerQueries: true,
    isolation: true,
    placeItems: true,
    justifyItems: true,
    spaceBetween: true,
    columns: true,
    columnsExtended: true,

    // Extended Typography
    typographyExtended: true,
    fontExtended: true,
    letterSpacing: true,
    lineHeight: true,
    textAlignLast: true,
    textDecorationExtended: true,
    textJustify: true,
    textIndent: true,
    textShadow: true,
    textEmphasis: true,
    textOrientation: true,
    textUnderline: true,
    hangingPunctuation: true,
    hyphenate: true,
    initialLetter: true,
    tabSize: true,
    wordBreak: true,
    wordWrap: true,
    writingMode: true,
    unicodeBidi: true,

    // Extended Visual
    backgroundExtended: true,
    colorModifiers: false,
    blendModes: true,
    masks: true,
    borderRadiusLogical: true,
    ring: true,
    outline: true,
    appearance: true,
    accentColor: true,
    colorScheme: true,

    // Extended Interaction
    interaction: true,
    userSelect: true,
    willChange: true,
    all: true,
    caret: true,
    scroll: true,
    overscrollBehavior: true,
    overscrollBehaviorExtended: true,
    overflowExtended: true,

    // Effects
    animations: true,
    transforms: true,
    transforms3d: true,
    filters: true,
    aspectRatio: true,
    imageRendering: true,
    transitionBehavior: true,

    // Content
    list: true,
    listStyleExtended: true,
    table: true,
    counter: true,
    caption: true,
    quotes: true,
    orphans: true,
    widows: true,
    pageBreak: true,
    break: true,
    verticalAlign: true,

    // Advanced
    arbitrary: false,
    logicalProperties: true,
    sizingLogical: true,
    offset: true,
    shapeOutside: true,
    markerExtended: true,
    zoom: true,
    fieldSizing: true,
    svg: true,
    box: true,
    divide: true,

    // State Variants
    states: true,
    hover: true,
    focus: true,
    active: true,
    disabled: true,

    // Theme Support
    darkMode: true,
    rtl: true,
    accessibility: true,
    zIndex: true,
  },

  // ============================================================================
  // Breakpoints - Customize responsive breakpoints
  // ============================================================================
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },

  // ============================================================================
  // Spacing Scale - Customize margin/padding values
  // ============================================================================
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    4: '1rem',
    8: '2rem',
    16: '4rem'
    // Add or remove values as needed
  },

  // ============================================================================
  // Colors - Customize your color palette
  // ============================================================================
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    }
    // Add your brand colors here
  }
};
