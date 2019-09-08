/**
 *
 * Webpack DLL configuration
 *
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const pullAll = require('lodash/pullAll');
const paths = require('./paths.config');

/** plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** package.json */
const pkg = require('./package.json');

module.exports = merge(require('./webpack.common.config'), {
  mode: 'development',
  entry: {
    [pkg.dll.name]: pullAll(Object.keys(pkg.dependencies), pkg.dll.exclude || []),
  },
  output: {
    filename: '[name].dll.js',
    path: paths.dll,
    library: '[name]_[hash]',
    libraryTarget: 'var',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [paths.dll],
    }),
    new webpack.DllPlugin({
      path: path.join(paths.dll, '[name].manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
});
