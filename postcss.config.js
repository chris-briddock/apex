import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    // Use modern CSS features with automatic fallbacks and vendor prefixes
    postcssPresetEnv({
      stage: 2, // Use features at stage 2 or above
      autoprefixer: {
        grid: 'autoplace',
        flexbox: 'no-2009'
      },
      features: {
        'nesting-rules': true, // Enable CSS nesting
        'custom-media-queries': true,
        'custom-properties': false, // Preserve CSS variables (don't transform to static values)
        'light-dark-function': false, // Avoid csstools color-scheme helper output for modern targets
      },
      preserve: true // Preserve original CSS alongside transformed versions
    })
  ]
};
