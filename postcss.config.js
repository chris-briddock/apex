export default {
  plugins: {
    autoprefixer: {
      grid: 'autoplace',
      flexbox: 'no-2009'
    },
    cssnano: {
      preset: 'default',
      discardComments: {
        removeAll: true
      },
      normalizeWhitespace: true,
      minifyFontValues: true,
      minifyGradients: true,
      minifyParams: true,
      minifySelectors: true,
      reduceIdents: false,
      zindex: false
    }
  }
};