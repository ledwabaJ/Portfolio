import {
  defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {
  visualizer
} from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  base: './',
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@common': path.resolve(__dirname, 'src/common')
    }
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    sourcemap: true,
    outDir: 'build', // Set primary output to dist
    rollupOptions: {
      // external: ['react-swipeable'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
      // You can add specific Rollup options here if needed,
      // but Vite usually handles most optimizations.
      // For example, if you want to split chunks in a specific way:
      // output: {
      //   manualChunks(id) {
      //     if (id.includes('node_modules')) {
      //       return id.toString().split('node_modules/')[1].split('/')[0].toString();
      //     }
      //   }
      // }
    }
  }
});