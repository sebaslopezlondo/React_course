//import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

/*
  SWC Son las siglas de Speedy Web Compiler.
  Reemplaza a Babel.
    Permite compilar los archivos más rápido.
*/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Nos ayuda a exterder la informacion que es globalmente compartida en una app de Vite
    globals: true,
    environment: "jsdom",
  },
});
