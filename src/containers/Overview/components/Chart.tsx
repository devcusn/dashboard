import { useEffect, useMemo } from "react";
import useChart from "../../../hooks/useChart";

const CircleChart = () => {
  const { chart, setOption } = useChart({ height: 400 });

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    }),
    []
  );

  useEffect(() => {
    setOption(option);
  }, [option, setOption]);

  return <div className="w-full">{chart}</div>;
};
export default CircleChart;
