var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var T = process.env.npm_lifecycle_event

var common = {
  entry: {
    main: path.join(__dirname, 'src', 'main'),
    venders: path.join(__dirname, 'src', 'venders')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
        /* include: path.join(__dirname, 'src') */
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.posix.join(__dirname, 'public', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json', '.scss', '.css']
  },
}

if (T === 'dev' || !T) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT
    },
    devtool: 'eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

if (T === 'build') {
  module.exports = merge(common, {})
}
