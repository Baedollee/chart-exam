import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => {
    return width || `100%`;
  }};
  height: ${({ height }) => {
    return height || `100%`;
  }};
`;

// 랜덤 색상
const randomRgb = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return [r, g, b];
};

const randomRgbHex = () => {
  let [r, g, b] = randomRgb();

  r = r.toString(16).length === 1 ? "0" + r.toString(16) : r.toString(16);
  g = g.toString(16).length === 1 ? "0" + g.toString(16) : g.toString(16);
  b = b.toString(16).length === 1 ? "0" + b.toString(16) : b.toString(16);

  return r + g + b;
};

/**
 * 도넛 차트
 * @data 데이타 셋 / type : {}
 * @options 옵션 셋 / type : {}
 * @width 차트 컨테이너 너비 / default : '100%' / type : string
 * @height 차트 컨테이너 높이 / default : '100%' / type : string
 * @returns 도넛 차트
 */
const DoughnutChart = ({ data, options, width, height }) => {
  const { fontSize, cutout, borderWidth } = options;

  const newData = [...data] || null;
  const doughnutData = {
    labels: newData?.map((i) => i?.xValue) || "",
    datasets: [
      {
        data: newData?.map((i) => i?.yValue) || [0],
        backgroundColor: newData?.map((i) => {
          return i?.color || "#" + randomRgbHex();
        }),
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,

    // 도넛 안에 내부 원 크기 default 50%
    cutout: cutout || "50%",

    radius: "90%",
    // 도넛 반 자르기
    // circumference: 180,
    // 도넛 돌리기
    // rotation: 270,

    borderColor: "white",
    borderWidth: borderWidth || 0,
    hoverOffset: 20,
    hoverBorderColor: "white",

    // elements: {
    //   arc: {},
    // },

    plugins: {
      // 내부에 라벨 표시 설정
      datalabels: {
        display: true,
        color: "white",
        font: { size: fontSize || "21px", weight: 900, family: "Noto Sans" },
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
    <Container width={width} height={height}>
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </Container>
  );
};

export default DoughnutChart;
