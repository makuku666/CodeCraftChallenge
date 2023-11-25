/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000, open: true, strictPort: true },
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
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
  ],
  test: {
    files: '**/*.test.js', // Pattern for test files
    transform: {
      '^.+\\.jsx?$': 'babel-jest' // Transformation configuration
    },
    testEnvironment: 'jsdom', // Example environment (can be changed as needed)
    maxConcurrency: 4 // Number of parallel test processes to run
  }
})
