import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Text-Editor/",
  define: {
    global: {}, // Define an empty global object to avoid circular references
  },
});
