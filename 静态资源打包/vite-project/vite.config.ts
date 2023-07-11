import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    //别名
    alias: {
      "@assets": path.join(__dirname, "src/assets"),
    },
  },
});
