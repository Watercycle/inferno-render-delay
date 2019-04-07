const path = require('path')

module.exports = {
  entry: './src/withRenderDelay.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'withRenderDelay.jsx',
    library: 'inferno-render-delay',
    libraryTarget: 'umd'
  },
  externals: ['inferno'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [['babel-plugin-inferno']]
        }
      }
    ]
  }
}