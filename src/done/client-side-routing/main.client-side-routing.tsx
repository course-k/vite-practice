import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import TopComponent from "./TopComponents.tsx";
import AnotherComponent from "./AnotherComponent.tsx";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <TopComponent />,
  },
  {
    path: "/another",
    element: <AnotherComponent />,
  },
];
const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
