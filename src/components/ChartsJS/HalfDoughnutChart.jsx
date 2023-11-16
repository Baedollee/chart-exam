import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

const TextArea = styled.div`
  display: flex;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  span {
    font-size: 40px;
    font-weight: 500;
  }
`;

const HalfDoughnutChart = () => {
  const num = 80;

  const data = {
    labels: ["pink"],
    datasets: [
      {
        data: num ? [num, 100 - num] : [0, 100],
        // data: [0, 0],
        backgroundColor: ["red", "lightGray"],
        hoverBackgroundColor: ["red", "lightGray"],
      },
    ],
  };

  //   const options = {
  //     responsive: true,
  //     // 도넛 안에 내부 원 크기 default 50%
  //     cutout: "50%",
  //     radius: "90%",
  //     // 도넛 반 자르기
  //     circumference: 180,
  //     // 도넛 돌리기
  //     rotation: 270,
  //     borderWidth: 0,
  //     scaleBeginAtZero: true,

  //     elements: {
  //       center: {
  //         text: Math.round(num * 100),
  //         fontStyle: "Helvetica", //Default Arial
  //         sidePadding: 15, //Default 20 (as a percentage)
  //       },
  //     },

  //     plugins: {
  //       datalabels: { display: false },

  //       custom: {},
  //       legend: {
  //         display: false,
  //       },
  //       tooltips: {
  //         enabled: false,
  //       },
  //     },
  //   };
  const options = {
    rotation: -90,
    circumference: 180,
    cutout: "60%",
    maintainAspectRatio: false,
    responsive: true,

    borderColor: "white",
    borderWidth: 0,
    hoverOffset: 0,
    hoverBorderColor: "white",

    plugins: {
      //   title: {
      //     display: true,
      //     position: "bottom",
      //     text: "도넛 차트다아아",
      //   },

      datalabels: { display: false },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <Container>
      <Doughnut data={data} options={options} />
      <TextArea>
        <span>{num}%</span>
      </TextArea>
    </Container>
  );
};

export default HalfDoughnutChart;
