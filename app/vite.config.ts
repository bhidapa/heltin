import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { relay } from './vite-plugin-relay';

const supportedBrowsers = browserslist(null, {});
if (!Array.isArray(supportedBrowsers)) {
  throw new Error("Supported browsers couldn't be calculated");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  return {
    define: {
      SUPPORTED_BROWSERS: JSON.stringify(supportedBrowsers),
    },
    server: {
      port: 8080,
      proxy: {
        '/api/graphql': {
          target: `http://localhost:${env.GRAPHQL_PORT}/graphql`,
          rewrite: () => '',
        },
        '/api': {
          target: `http://localhost:${env.SERVER_PORT}`,
        },
      },
    },
    plugins: [tsconfigPaths(), react(), relay()],
    build: {
      outDir: path.join(__dirname, 'build'),
      rollupOptions: {
        input: {
          index: path.join(__dirname, 'index.html'),
          browserNotSupported: path.join(__dirname, 'browser-not-supported.html'),
        },
      },
    },
  };
});
