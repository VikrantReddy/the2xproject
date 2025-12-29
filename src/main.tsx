import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

// main.tsx
createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/the2xproject">
      <App />
    </BrowserRouter>
  );