import DashboardLayout from "../../Layout/Dashboard/index.layout";
import InfoBox from "../../components/InfoBox";

const OverviewPage = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-3">
        <InfoBox title="User" value={100} />
        <InfoBox title="Project" value={20} />
        <InfoBox title="Error" value={10} />
        <InfoBox title="Message" value={5} />
      </div>
    </DashboardLayout>
  );
};
export default OverviewPage;
