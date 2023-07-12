import { transformSync } from '@babel/core';
import babelPluginRelay from 'babel-plugin-relay';
import { Plugin } from 'vite';

export function relay(): Plugin {
  return {
    name: 'vite:relay',
    transform(src, filePath) {
      if (
        !filePath.includes('node_modules') &&
        /.tsx?$/.test(filePath) &&
        src.includes('graphql`')
      ) {
        const out = transformSync(src, {
          plugins: [[babelPluginRelay]],
          code: true,
          sourceMaps: true,
        });
        if (!out?.code) {
          throw new Error(`vite:relay plugin failed to transform ${filePath}`);
        }
        return {
          code: out.code,
          map: out.map,
        };
      }
    },
  };
}
