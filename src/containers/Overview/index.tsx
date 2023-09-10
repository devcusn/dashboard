import DashboardLayout from "../../Layout/Dashboard/index.layout";
import InfoBox from "../../components/InfoBox";
import CircleChart from "./components/Chart";

const OverviewPage = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-20">
        <CircleChart />
        <CircleChart />
        <div className="grid grid-cols-2 grid-rows-2 w-full min-w-fit gap-5">
          <InfoBox title="User" value={100} />
          <InfoBox title="Project" value={20} />
          <InfoBox title="Error" value={10} />
          <InfoBox title="Message" value={5} />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default OverviewPage;
