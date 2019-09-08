/**
 *
 * paths configuration
 *
 */

const fs = require('fs');
const path = require('path');
const appDir = fs.realpathSync(process.cwd());
const resolvePath = (...relativePaths) => path.resolve(appDir, ...relativePaths);

// package.json
const pkg = require('./package.json');

module.exports = {
  publicUrl: '/',
  appPublic: resolvePath('public'),
  appSrc: resolvePath('src'),
  appEntry: resolvePath('src', 'index.tsx'),
  appHtml: resolvePath('src', 'index.html'),
  appBuild: resolvePath('build'),
  dll: resolvePath(pkg.dll.path),
};
