/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@src',
          replacement: path.resolve(__dirname, './src')
        },
        {
          find: '@root',
          replacement: path.resolve(__dirname, './')
        }
      ]
    })
  ]
})
