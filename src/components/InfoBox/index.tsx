import { InfoBoxProps } from "./types";

const InfoBox: React.FunctionComponent<InfoBoxProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center  bg-blue-500 w-52 h-52 rounded-lg p-4 shadow-md">
      <h2 className="p-5 text-3xl text-white font-semibold">{title}</h2>
      <p className="text-2xl text-white">{value}</p>
    </div>
  );
};
export default InfoBox;
