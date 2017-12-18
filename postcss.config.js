module.exports = (ctx) => ({
  map: true,
  plugins: [
    require('postcss-import')({
      skipDuplicates: false
    }),
    require('postcss-cssnext')({})
  ]
});
