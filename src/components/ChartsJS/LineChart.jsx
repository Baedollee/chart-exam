import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const xLabels = ["0~8", "8~16", "17~20", "21~24", "25~(듀스)"];

  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "선수1",
        data: [20, 10, 50, -10, 50],
        backgroundColor: "red",
      },
      //   {
      //     label: "선수2",
      //     data: [80, 70, 60, 100, 90],
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };

  const options = {
    // 사용자가 높이 너비 조정할 수 있게, false로 해놔야함
    maintainAspectRatio: false,
    responsive: true,

    layout: {},

    elements: {},

    scales: {},

    //!
    plugins: {
      datalabels: {
        display: false,
      },

      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
};

export default LineChart;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
`;
