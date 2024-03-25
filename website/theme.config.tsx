import { defineConfig, PRODUCTS } from '@theguild/components';

export default defineConfig({
  websiteName: 'heltin',
  description: 'Interdisciplinary registry for a holistic view on mental health',
  docsRepositoryBase: 'https://github.com/bhidapa/heltin',
  logo: PRODUCTS.HELTIN.logo({ className: 'w-7' }),
});
