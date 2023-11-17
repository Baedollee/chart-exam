import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : 200)}px;
  height: ${({ width }) => (width ? width / 2 : 100)}px;
`;

const TextArea = styled.div`
  display: flex;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  ${({ fontSize }) =>
    `span {
    font-size: ${fontSize ? fontSize : 20}px;
    font-weight: 500;
  `}}
`;

/**
 *
 * @xValue 보여줘야 하는 퍼센트 값 type: num
 * @width 차트 크기
 * @returns
 */
const HalfDoughnutChart = ({ data, option }) => {
  const { xValue, barColor } = data;

  const { width, fontSize } = option;

  console.log("TCL: HalfDoughnutChart -> color", barColor);

  const CountRangeSet = (value) => {
    if (value > 100) {
      return 100;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  };

  const num = xValue ? CountRangeSet(xValue) : 0;

  const chartData = {
    labels: [],
    datasets: [
      {
        data: num ? [num, 100 - num] : [0, 100],
        // data: [0, 0],
        backgroundColor: [barColor || "blue", "lightGray"],
        hoverBackgroundColor: [barColor || "blue", "lightGray"],
      },
    ],
  };

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
    <Container width={width}>
      <Doughnut data={chartData} options={options} />
      <TextArea fontSize={fontSize}>
        <span>{num}%</span>
      </TextArea>
    </Container>
  );
};

export default HalfDoughnutChart;
