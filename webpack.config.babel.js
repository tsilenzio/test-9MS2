import webpack from 'webpack';
import { resolve } from 'path';

module.exports = {
  cache: true,
  context: resolve(__dirname, 'src'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build/build'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }],
  },
  devServer: {
    hot: true,
    contentBase: 'src/server/public/',
    publicPath: '/assets/scripts/',
  },
  mode: 'production',
};
