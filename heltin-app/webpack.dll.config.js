/**
 *
 * Webpack DLL configuration
 *
 */

const path = require('path');
const webpack = require('webpack');
const pullAll = require('lodash/pullAll');
const { merge } = require('webpack-merge');
const pkg = require('./package.json');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(require('./webpack.common.config'), {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    [pkg.dll.name]: pullAll(
      Object.keys(pkg.dependencies),
      pkg.dll.exclude || [],
    ),
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, pkg.dll.path),
    library: '[name]_[hash]',
    libraryTarget: 'var',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, pkg.dll.path)],
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, pkg.dll.path, '[name].manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
});
