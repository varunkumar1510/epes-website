import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "epes-website", // ✅ Fixed placement

  plugins: [
    react(),
    mode === "development" ? componentTagger() : null, // ✅ Fixed condition
  ].filter(Boolean), // ✅ Ensures falsy values (like `null`) are removed

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
