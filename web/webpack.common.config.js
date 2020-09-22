/**
 *
 * Webpack shared/common configuration
 *
 */

const path = require('path');

module.exports = {
  context: __dirname,
  target: 'web',
  output: {
    publicPath: process.env.PUBLIC_PATH || '/',
    path: path.join(__dirname, 'dist'),
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
    ],
  },
};
