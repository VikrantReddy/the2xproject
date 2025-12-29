import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <App /> }
  ], {
    basename: "/the2xproject", // Add this line!
  });

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
