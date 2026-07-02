import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração padrão do Vite para um projeto React SPA (Single Page Application).
export default defineConfig({
  plugins: [react()],
});
