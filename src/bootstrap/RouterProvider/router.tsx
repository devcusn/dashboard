import { createBrowserRouter } from "react-router-dom";
import OverviewPage from "../../containers/Overview";

export const router = createBrowserRouter([
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/*",
    element: <div>not found</div>,
  },
]);
