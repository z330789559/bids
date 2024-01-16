import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite'
import {createHtmlPlugin} from 'vite-plugin-html';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: path.resolve(__dirname, "./dist"),
    
    assetsDir: './assets',
    rollupOptions:{
      output:{
        dir: path.resolve(__dirname, "./dist"),
        entryFileNames: '[name].js',
      },
      input:{
        main: path.resolve(__dirname, "./index.html"),
        task: path.resolve(__dirname, "./task.html"),
      },
  
    }
  },

  resolve:{
    extensions:['.js','.vue','.json'],
    alias:{
      '@': path.resolve(__dirname, "./src"),
      '@assets': path.resolve(__dirname, "./src/assets"),
    }
  },

  plugins: [vue()],
})
