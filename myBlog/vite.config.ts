import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend"; //引入插件
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 80,
    host: true,
    open: true,
    proxy: {
      "/test": {
        target: "http://localhost:8081",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/test/, ""),
      },
      "/vvhan": {
        target: "https://api.vvhan.com",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/vvhan/, ""),
      },
    },
  },
});
