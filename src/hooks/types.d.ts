import { MutableRefObject } from "react";
import * as echarts from "echarts/core";
import { BarSeriesOption, LineSeriesOption } from "echarts/charts";
import {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption,
} from "echarts/components";
import { XAXisComponentOption, YAXisComponentOption } from "echarts";

type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
  | XAXisComponentOption
  | YAXisComponentOption
>;
type ECBasicOption = {
  legend?: LegendComponentOption;
  xAxis?: object;
  yAxis?: object;
  series?: object;
};

export type UseChartProps = {
  height: number | string;
};
export type ChartComponentProps = {
  refChart: MutableRefObject<HTMLDivElement> | null;
  height: number | string;
};
