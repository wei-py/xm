import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(path.dirname(new URL(import.meta.url).pathname), "example"),
  server: {
    port: 3000,
  }
});