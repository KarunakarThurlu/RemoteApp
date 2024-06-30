import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteEntry',
      filename:"remoteEntry.js",
      exposes: {
        //remoteApp: 'https://remoteapp-0dx9.onrender.com/assets/remoteEntry.js',
        './ColumnChart':'./src/Components/ColumnChart.jsx'
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
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  }
})
