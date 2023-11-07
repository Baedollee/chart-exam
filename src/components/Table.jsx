import React from "react";
import ReactApexChart from "react-apexcharts";

const Table = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["0~8", "21~24", "25~(듀스)"],
      //   tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },

      tickAmount: 5,
      logBase: 20,
      min: 20,
      max: 100,
      axisTicks: {
        show: true,
        width: 100,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      show: false,
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const series = [
    {
      name: "Net Profit",
      data: [20, 30, 40],
    },
    {
      name: "Revenue",
      data: [50, 85, 60],
    },
  ];

  return (
    <>
      <ReactApexChart
        type="bar"
        options={options}
        series={series}
        width={"1000px"}
      />
    </>
  );
};

export default Table;
