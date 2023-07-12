// postcss.config.js

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
}

