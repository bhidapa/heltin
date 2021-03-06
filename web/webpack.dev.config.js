/**
 *
 * Webpack development config
 *
 */

const common = require('./webpack.common.config');
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');

// package.json
const pkg = require('./package.json');

// plugins
const { DefinePlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: path.join(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false, // unnecessary compression
            },
          },
        ],
      },
    ],
  },
  output: {
    pathinfo: true,
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
  },
  // we disable all optimizations to get blazing fast builds
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: 6001,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    stats: 'minimal',
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
    },
    proxy: {
      '/api/graphql': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new DefinePlugin({
      __DEV__: JSON.stringify(true),
      GQL_WEBSOCKET_ENPOINT: JSON.stringify('ws://localhost/graphql'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: 'write-references',
        diagnosticsOptions: { syntactic: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      templateParameters: (_0, { publicPath }) => ({ publicPath }),
    }),
    new webpack.DllReferencePlugin({
      sourceType: 'var',
      context: __dirname,
      manifest: path.join(pkg.dll.path, `${pkg.dll.name}.manifest.json`),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join(pkg.dll.path, '*.dll.js'),
      includeSourcemap: false,
    }),
  ],
});
