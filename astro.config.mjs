// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Site configuration
  site: "https://svnfr.com",

  // Build configuration
  build: {
    // Minify HTML, CSS, and JS
    format: "file",
  },

  // Image optimization
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Code splitting
      cssCodeSplit: true,
      // Minification
      minify: "terser",
      // Avoid using eval() for security reasons
      sourcemap: false,
    },
    // CSS optimization
    css: {
      devSourcemap: false,
    },
    // Performance optimizations
    optimizeDeps: {
      exclude: ["@tailwindcss/vite"],
    },
  },
});
