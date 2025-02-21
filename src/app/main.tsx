import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "./providers";
import App from "./App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
