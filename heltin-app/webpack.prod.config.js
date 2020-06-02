/**
 *
 * Webpack production config
 *
 */

const merge = require('webpack-merge');
const paths = require('./paths.config');
const common = require('./webpack.common.config');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /__tests__/, /(test|spec)\.tsx?$/],
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
    path: paths.appBuild,
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
    // clean build folder
    new CleanWebpackPlugin(),
    // injecting env constants
    new DefinePlugin({
      // environment
      __DEV__: JSON.stringify(false),
      // GraphQL WebSocket endpoint
      GQL_WEBSOCKET_ENPOINT: JSON.stringify('ws://localhost/graphql'),
    }),
    // type-checking for typescript
    new ForkTsCheckerWebpackPlugin({
      async: false, // we check types synchronously because transpilation is done by babel and we have no ts-loader
      checkSyntacticErrors: true,
    }),
    // html transpiler
    new HtmlWebpackPlugin({
      template: paths.appHtml,
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
    // simply copy everything from the public folder to the build
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.appPublic,
          to: paths.appBuild,
        },
      ],
    }),
  ],
});
