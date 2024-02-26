import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { rmSync } from 'node:fs';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },

    plugins: [react()],
  };
});
