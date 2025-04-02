import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:7023",
      },
      "/api": {
        target: "http://localhost:7023",
      },
    },
  },
});
