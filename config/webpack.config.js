const path = require('path')
const externalReact = require('webpack-external-react')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: externalReact.externals,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|build)/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
}