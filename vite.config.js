// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";
import { imagetools } from "vite-imagetools";     // ✅ لازم تستوردها
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: "brotliCompress" }), // أو gzip
    imagetools(),
    viteImagemin({
      mozjpeg: { quality: 78 },
      pngquant: { quality: [0.6, 0.8] },
      svgo: { plugins: [{ name: "removeViewBox", active: false }] },
    }),
  ],
});
