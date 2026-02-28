import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    // Add vendor prefixes
    autoprefixer({
      grid: 'autoplace',
      flexbox: 'no-2009'
    })
  ]
};
