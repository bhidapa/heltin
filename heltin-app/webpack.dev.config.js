/**
 *
 * Webpack development config
 *
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const paths = require('./paths.config');
const webpack = require('webpack');
const path = require('path');

// package.json
const pkg = require('./package.json');

// plugins
const { DefinePlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: paths.appEntry,
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /__tests__/, /(test|spec)\.tsx?$/],
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
    contentBase: paths.appPublic,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
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
    // injecting env constants
    new DefinePlugin({
      // environment
      __DEV__: JSON.stringify(true),
      // GraphQL WebSocket endpoint
      GQL_WEBSOCKET_ENPOINT: JSON.stringify('ws://localhost/graphql'),
    }),
    // type-checking for typescript
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
    }),
    // html transpiler
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      templateParameters: (_0, { publicPath }) => ({ publicPath }),
    }),
    // injecting the DLL
    new webpack.DllReferencePlugin({
      sourceType: 'var',
      context: __dirname,
      manifest: path.join(paths.dll, `${pkg.dll.name}.manifest.json`),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join(paths.dll, '*.dll.js'),
      includeSourcemap: false,
    }),
  ],
});
