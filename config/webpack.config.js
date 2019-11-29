const path = require('path')
const externalReact = require('webpack-external-react')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },
  externals: externalReact.externals,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|build)/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { test: /\.(png|jpg|gif|cur)$/, use: 'url-loader?limit=81920' },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.ico$/,
        use: [{
            loader: 'file-loader?name=[name].[ext]'
        }],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [path.join(__dirname, "src/assets")],
        loader: "file-loader?name=assets/[name].[ext]"
      }
    ],
  }
}