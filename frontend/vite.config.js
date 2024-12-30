import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3500,
    open: true,
  },
});
console.log('Vite is running with the following config:', defineConfig);
