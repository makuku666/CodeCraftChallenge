/* eslint-disable import/order */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@root',
        replacement: fileURLToPath(new URL('./', import.meta.url))
      }
    ]
  }
})
