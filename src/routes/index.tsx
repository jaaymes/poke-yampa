import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  // Redirecionar /docs para /docs/index.html
  {
    path: "/docs",
    element: <Navigate to="/docs/index.html" replace />,
  },
  {
    path: "/docs/*",
    element: null, // O Storybook será servido diretamente pelo servidor
  },
]);
