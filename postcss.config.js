import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    // Use modern CSS features with automatic fallbacks and vendor prefixes
    postcssPresetEnv({
      stage: 2, // Use features at stage 2 or above
      features: {
        'nesting-rules': true, // Enable CSS nesting
        'custom-media-queries': true,
        'custom-properties': false, // Preserve CSS variables (don't transform to static values)
        'light-dark-function': false, // Avoid csstools color-scheme helper output for modern targets
        'break-properties': false, // Disable break-* property fallbacks (we want clean modern CSS)
        'overflow-wrap-property': false, // Disable overflow-wrap to word-wrap fallback (deprecated)
        'all-property': false, // Disable all: initial expansion to avoid deprecated properties like clip
      },
      preserve: true, // Preserve original CSS alongside transformed versions
      autoprefixer: false // Disable vendor prefixes - we only use standardized CSS
    })
  ]
};
