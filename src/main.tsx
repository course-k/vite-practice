import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useSearchParams,
} from "react-router-dom";
import App from "./App";
import Child from "./Child";
import OtherChild from "./OtherChild";

const WrapperChild = () => {
  const [searchPrams] = useSearchParams();
  const param = searchPrams.get("param");
  console.log(param);
  return param ? <Child /> : <OtherChild />;
};

const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/child", element: <WrapperChild /> },
];

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
