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
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

/**
 *
 * `ts-loader` has a bug where it produces false-positives about missing exports when
 * in `transpileOnly` mode. The `IgnoreNotFoundExportPlugin` omits those warnings.
 *
 * Take a look at: https://github.com/TypeStrong/ts-loader/issues/653#issuecomment-390889335
 *
 */
const ModuleDependencyWarning = require('webpack/lib/ModuleDependencyWarning');
class IgnoreNotFoundExportPlugin {
  apply(compiler) {
    const messageRegExp = /export '.*'( \(reexported as '.*'\))? was not found in/;
    const doneHook = (stats) => {
      // eslint-disable-next-line no-param-reassign
      stats.compilation.warnings = stats.compilation.warnings.filter((warn) => {
        if (warn instanceof ModuleDependencyWarning && messageRegExp.test(warn.message)) {
          return false;
        }
        return true;
      });
    };

    if (compiler.hooks) {
      compiler.hooks.done.tap('IgnoreNotFoundExportPlugin', doneHook);
    } else {
      compiler.plugin('done', doneHook);
    }
  }
}

module.exports = merge(common, {
  mode: 'development',
  entry: paths.appEntry,
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
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
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
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
    new DefinePlugin({
      __DEV__: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
    }),
    new webpack.DllReferencePlugin({
      sourceType: 'var',
      context: __dirname,
      manifest: path.join(paths.dll, `${pkg.dll.name}.manifest.json`),
    }),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true,
      appMountIds: ['root'],
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: paths.publicUrl,
    }),
    new IgnoreNotFoundExportPlugin(),
    new AddAssetHtmlPlugin({
      filepath: path.join(paths.dll, '*.dll.js'),
      includeSourcemap: false,
    }),
  ],
});
