import { defineConfig } from "vite";
import { resolve } from 'path'
import glsl from 'vite-plugin-glsl'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sine: resolve(__dirname, 'identities/sine.html'),
        cosine: resolve(__dirname, 'identities/cosine.html')

      }
    },
    target: "es2022"
  },
  esbuild: {
    target: "es2022"
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022"
    }
  },
  plugins: [glsl()]
})
