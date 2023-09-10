import { RouterProvider as AppRouterProvider } from "react-router-dom";
import { router } from "./router";

const RouterProvider = () => {
  return <AppRouterProvider router={router} />;
};

export default RouterProvider;
