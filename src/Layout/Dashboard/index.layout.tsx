import SideBar from "./components/SideBar";
import { DashboardLayoutProps } from "./types";

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="container min-h-screen min-w-full flex">
      <SideBar />
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
