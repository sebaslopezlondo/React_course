import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/*
  SWC Son las siglas de Speedy Web Compiler.
  Reemplaza a Babel.
    Permite compilar los archivos más rápido.
*/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
