import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./done/nested-routing/Home.tsx";
import Customer from "./done/nested-routing/Customer.tsx";
import Settings from "./done/nested-routing/Settings.tsx";
import Notification from "./done/nested-routing/Notification.tsx";
import Mail from "./done/nested-routing/Mail.tsx";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    // Homeコンポーネントの子
    children: [
      {
        path: "customer",
        element: <Customer />,
      },
      {
        path: "settings",
        element: <Settings />,
        // Settingsコンポーネントの子
        children: [
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "mail",
            element: <Mail />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
