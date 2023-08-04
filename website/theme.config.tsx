import React from 'react';
import { defineConfig, useTheme } from '@theguild/components';

const siteName = 'heltin';

export default defineConfig({
  docsRepositoryBase: 'https://github.com/bhidapa/heltin',
  logo: (
    <div>
      <h1 className="md:text-md text-sm font-medium">{siteName}</h1>
      <h2 className="hidden text-xs sm:block">Mental healthcare registry</h2>
    </div>
  ),
  main({ children }) {
    useTheme();
    return <>{children}</>;
  },
  siteName,
});
