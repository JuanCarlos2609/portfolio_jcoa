import { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@models': resolve('src/models/index.ts'),
      '@translations': resolve('src/hooks/useTranslations'),
    },
  },
});
