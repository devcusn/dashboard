import { createBrowserRouter } from "react-router-dom";

import OverviewPage from "../../containers/Overview";
import LoginPage from "../../containers/Login";
import LandingPage from "../../containers/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
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
