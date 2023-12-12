import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'info',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: process.env.VITE_APP_HOST,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, process.env.VITE_BASE_API + '/v1')
  //       // pathRewrite: {
  //       //   '^/api': process.env.VITE_BASE_API + '/v1',
  //       // },
  //       // logLevel: 'info',
  //     }
  //   }
  // },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
