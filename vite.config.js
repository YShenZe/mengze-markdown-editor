import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('bootstrap') || id.includes('bootstrap-icons')) {
              return 'vendor-bootstrap';
            }
            if (id.includes('easymde') || id.includes('marked') || id.includes('codemirror')) {
              return 'vendor-markdown';
            }
            if (id.includes('jspdf') || id.includes('jszip') || id.includes('file-saver')) {
              return 'vendor-files';
            }
            return 'vendor';
          }
        }
      }
    }
  }
});