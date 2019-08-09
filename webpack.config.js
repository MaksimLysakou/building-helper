const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/template.html'
    })
  ],
};
