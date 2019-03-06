const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:12].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
        ],
      },
      {// antd样式处理
        test: /\.css$/,
        exclude: /src/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, '../dist/assets') },
    ]),
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: './index.html',
    }),
  ],
};
