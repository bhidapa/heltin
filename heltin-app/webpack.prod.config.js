/**
 *
 * Webpack production config
 *
 */

const merge = require('webpack-merge');
const paths = require('./paths.config');
const common = require('./webpack.common.config');

// plugins
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { DefinePlugin } = require('webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: { reportFiles: ['!src/**/*.test.{ts,tsx}'] },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[contenthash:8].chunk.js',
    path: paths.appBuild,
  },
  plugins: [
    new DefinePlugin({
      // environment
      __DEV__: JSON.stringify(false),
      // GraphQL WebSocket endpoint
      GQL_WEBSOCKET_ENPOINT: JSON.stringify('ws://localhost/graphql'),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
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
    new InterpolateHtmlPlugin({
      PUBLIC_URL: paths.publicUrl,
    }),
    new CopyWebpackPlugin([
      {
        from: paths.appPublic,
        to: paths.appBuild,
      },
    ]),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/],
      navigateFallback: '/index.html',
      navigateFallbackDenylist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp('^/_'),
        // Exclude URLs containing a dot, as they're likely a resource in
        // public/ and not a SPA route
        new RegExp('/[^/]+\\.[^/]+$'),
      ],
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: paths.publicUrl,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
          parallel: true,
          cache: true,
          sourceMap: true,
        },
      }),
    ],
    runtimeChunk: true,
  },
});
