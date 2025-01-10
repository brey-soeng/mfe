import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        marketing: "http://localhost:3004/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    assetsDir: "assets",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
