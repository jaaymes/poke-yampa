import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "../pages/home";
import { Maintenance } from "../pages/maintenance";
import { NotFound } from "../pages/not-found";
import { ServerError } from "../pages/server-error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/server-error",
    Component: ServerError,
  },
  {
    path: "/maintenance",
    Component: Maintenance,
  },
  {
    path: "/docs",
    element: <Navigate to="/docs/index.html" replace />,
  },
  {
    path: "/docs/*",
    element: null,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
