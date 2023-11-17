import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

const COMMON_COLOR = ["red", "blue", "black", "orange", "green", "orange"];

const DoughnutChart = () => {
  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: ["김연경", "배성열", "강인호", "으아아아", "배고파", "피곤해"],
    datasets: [
      {
        data: [20, 20, 10, 5, 5, 10],
        backgroundColor: COMMON_COLOR,
      },
    ],
  };

  const options = {
    responsive: true,

    // 도넛 안에 내부 원 크기 default 50%
    cutout: "50%",

    radius: "90%",
    // 도넛 반 자르기
    // circumference: 180,
    // 도넛 돌리기
    // rotation: 270,

    borderColor: "white",
    borderWidth: 2,
    hoverOffset: 20,
    hoverBorderColor: "white",
    elements: {
      arc: {},
    },
    plugins: {
      // 내부에 라벨 표시 설정
      datalabels: {
        display: true,
        color: "white",
        font: { size: "30%", weight: 900, family: "Noto Sans" },
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data?.datasets?.[0]?.data;
          if (value !== 0) {
            let sum = 0;
            const dataArr = datasets;
            dataArr?.map((data) => (sum += parseInt(data)));
            const percentage = Math?.round((value * 100) / sum) + "%";
            return percentage;
          } else {
            const percentage = "";
            return percentage;
          }
        },
      },

      // 범례
      legend: {
        display: false,
        position: "bottom",
        labels: {
          font: {
            size: 20,
          },
        },
      },
      title: {
        display: false,
        text: "도넛 차트다아아",
      },
    },
  };

  return (
    <Container>
      <Doughnut data={data} options={options} />
    </Container>
  );
};

export default DoughnutChart;
