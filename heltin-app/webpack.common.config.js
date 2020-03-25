/**
 *
 * Webpack shared/common configuration
 *
 */

const path = require('path');
const { publicUrl } = require('./paths.config');

module.exports = {
  context: __dirname,
  target: 'web',
  output: {
    publicPath: publicUrl,
    path: path.join(__dirname, 'build'),
    pathinfo: false,
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|jp(e*)g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
