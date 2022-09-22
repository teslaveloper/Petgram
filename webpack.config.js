const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    // APP ENTRY POINT
  entry: path.join(__dirname,'src','index.jsx'),

  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  
  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    port: 9000
  },
}
