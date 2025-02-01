import { defineConfig } from "vite";
import glsl from 'vite-plugin-glsl'
export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [glsl()]
})
