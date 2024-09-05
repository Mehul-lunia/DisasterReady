import React from "react";
import { Chart } from "react-google-charts";

function ChartContainer({mag}) {
  return (
    <>
      <Chart
        chartType="BarChart"
        data={mag}
        width="100%"
        height="400px"
      />
    </>
  );
}

export default ChartContainer;
