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
      '@common': path.resolve(__dirname, 'src/common'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@*': path.resolve(__dirname, 'src/*/index')
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
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});