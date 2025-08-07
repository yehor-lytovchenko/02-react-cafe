import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App/App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
