import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

import { UseChartProps, ChartComponentProps, ECBasicOption } from "./types";

const ChartComponent: React.FunctionComponent<ChartComponentProps> = ({
  refChart,
  height,
}) => {
  return <div style={{ width: "100%", height }} ref={refChart} />;
};

const useChart = ({ height }: UseChartProps) => {
  const [option, setOption] = useState<ECBasicOption>({});
  const chart = useRef(null || document.createElement("div"));

  useEffect(() => {
    const myChart = echarts.init(chart.current);
    myChart.setOption(option);
  }, [chart, option]);

  return {
    chart: <ChartComponent refChart={chart} height={height} />,
    setOption,
  };
};
export default useChart;
