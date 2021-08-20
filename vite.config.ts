import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})

