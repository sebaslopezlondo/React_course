import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { InitWithReact } from "./assets/docs/InitWithReact.tsx";
import { CssInProperties } from "./assets/docs/CssInProperties.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <InitWithReact />
    <CssInProperties />
  </StrictMode>
);
