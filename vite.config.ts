import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // 除外したいフォルダやファイルのパターンを指定
        /^src\/done\//,
      ],
    },
  },
  optimizeDeps: {
    exclude: ["src/done"],
  },
});
