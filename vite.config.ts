import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Vercel deploys this site at the domain root.
  base: "/",

  build: {
    outDir: "dist",

    // Increase warning threshold to 1500 KB.
    chunkSizeWarningLimit: 1500,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) {
              return "vendor_framer-motion";
            }

            if (id.includes("react")) {
              return "vendor_react";
            }

            if (id.includes("lodash")) {
              return "vendor_lodash";
            }

            return "vendor_misc";
          }
        },
      },
    },
  },
});
