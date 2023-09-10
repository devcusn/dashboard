import { createBrowserRouter } from "react-router-dom";

import OverviewPage from "../../containers/Overview";
import LoginPage from "../../containers/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/*",
    element: <div>not found</div>,
  },
]);
