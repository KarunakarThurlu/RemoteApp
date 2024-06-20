import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ColumnChart': './src/Components/ColumnChart.jsx',
      },
      shared: ['react', 'react-dom', 'highcharts-react-official'],
    }),
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 8081,
    headers: {
      'access-control-allow-origin': '*'
    }
  }
})
