import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // This groups all node_modules into a single vendor chunk
            return "vendor";
          }
        },
      },
    },
  },
});
