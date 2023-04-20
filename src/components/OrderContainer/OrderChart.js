import React from "react";
import { Chart } from "react-google-charts";

const OrderChart = (props) => {
  const { data } = props;


  const graph = () => {
    const chartData = [["No of Orders", "Customer Count"]];
    for (const key in data) {
      chartData.push([key, data[key]]);
    }
    return chartData;
  };
  const dataChart = graph();

  const options = {
    title: "My Daily Activities",
    is3D: true,
  };
  return (
    <div className="ms-auto container">
      <Chart
        chartType="PieChart"
        data={dataChart}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
};

export default OrderChart;
