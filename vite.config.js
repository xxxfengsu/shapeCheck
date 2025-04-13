import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: true,
  },
  plugins: [vue()],
});
