import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // Default Vite port (you can change this if needed)
    strictPort: true, // Fail if port 5173 is busy (optional)
  },
});
