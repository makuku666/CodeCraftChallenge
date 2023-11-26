/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000, open: true, strictPort: true },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  input: 'src/main.jsx',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      src: path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      public: `${path.resolve(__dirname, './public/')}`
      // graphql: `${path.resolve(__dirname, './src/graphql')}`,
      // assets: `${path.resolve(__dirname, './src/assets')}`
    }
  },
  test: {
    files: '**/*.test.js', // Pattern for test files
    transform: {
      '^.+\\.jsx?$': 'babel-jest' // Transformation configuration
    },
    testEnvironment: 'jsdom', // Example environment (can be changed as needed)
    maxConcurrency: 4 // Number of parallel test processes to run
  }
})
