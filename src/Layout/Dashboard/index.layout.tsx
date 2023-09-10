import DashboardHeader from "./components/Header";
import SideBar from "./components/SideBar";
import { DashboardLayoutProps } from "./types";

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="container min-h-screen min-w-full flex bg-slate-50">
      <SideBar />
      <div className="flex gap-5 flex-col w-full p-6 ">
        <DashboardHeader />
        <div className="h-full border-solid border-2 border-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
