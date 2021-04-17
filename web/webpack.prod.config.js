/**
 *
 * Webpack production config
 *
 */

const path = require('path');
const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
    path: path.join(__dirname, 'build'),
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true,
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      __DEV__: JSON.stringify(false),
      GQL_WEBSOCKET_ENPOINT: JSON.stringify('ws://localhost/graphql'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      templateParameters: (_0, { publicPath }) => ({ publicPath }),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'public'),
          to: path.join(__dirname, 'build'),
        },
      ],
    }),
  ],
});
