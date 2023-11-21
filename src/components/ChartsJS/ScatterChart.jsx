import React from "react";
import styled from "styled-components";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : 400)}px;
  height: ${({ height }) => (height ? height : 400)}px;
`;

const ScatterChart = ({ width, height }) => {
  const data = {
    datasets: [
      {
        label: "김선수(대한항공)",
        data: [
          { x: 0, y: 40 },
          { x: 20, y: 100 },
          { x: 11, y: 80 },
          { x: 8, y: 50 },
          { x: 7, y: 80 },
          { x: 6, y: 30 },
          { x: 4, y: 70 },
        ],
        backgroundColor: "blue",
      },
    ],
  };

  const options = {
    // 사용자가 높이 너비 조정할 수 있게, false로 해놔야함
    maintainAspectRatio: false,
    responsive: true,

    // 점의 굵기
    radius: 6,
    // 점의 색상
    // pointBackgroundColor: "#fff",
    interaction: {
      // intersect: false,
    },

    // 선 두께
    borderWidth: 2,

    layout: {},

    elements: {},

    scales: {
      y: {
        axis: "y", // 이 축이 y축임을 명시해줍니다.

        min: 0,
        max: 100,

        afterDataLimits: (scale) => {
          // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
          // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
          // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
          scale.max = scale.max * 1.2;
        },
        // 눈금선 설정
        grid: {
          //   display: false,
          //   drawOnChartArea: true,
          drawTicks: false,
          color: "lightgray",
        },
        border: {
          z: 0,
          color: "lightGray",
          width: 1,
          dash: [8], // 그리드 선의 길이와 간격 type number[]
        },

        ticks: {
          beginAtZero: true,
          stepSize: 20,
          callback: (value, index, ticks) => {
            if (value !== 0) {
              return value;
            }
          },
          //   backdropColor: "blue",
          padding: 8,
        },
      },
      x: {
        axis: "x", // x축(가로축)인지 y축(세로축)인지 표시합니다.
        // barPercentage: 1.0,
        // categoryPercentage: 1.0,
        autoSkip: false, // 라벨이 겹치지 않도록 자동으로 건너뛰기
        autoSkipPadding: 100,
        // 눈금 선 설정
        grid: {
          display: true,
          drawTicks: false,
          color: "blue",
          callback: (value, index, ticks) => {
            console.log("12321312", value, index, ticks);
          },
        },

        border: {
          z: 0,
          color: "lightGray",
          width: 1,
        },
        ticks: {
          backdropPadding: {
            x: 40,
            y: 4,
          },
          callback: (value, index, ticks) => {
            if (value !== 0) {
              return value;
            }
          },
          padding: 8,
        },
      },
    },

    //!
    plugins: {
      // 내부에 라벨 표시 여부
      datalabels: {
        display: false,
      },
      // 차트 제목 설정
      title: {
        display: true,
        text: "선 차트",
      },

      lineCustomYTitle: {
        display: true,
        text: "(%)",
        color: "black",
      },

      // 범례 스타일링
      legend: {
        position: "bottom",
        align: "end",

        labels: {
          // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시됩니다.
          usePointStyle: true,
          // 범례 간 가로 간격을 조정할 수 있습니다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않음
          padding: 20,
          boxWidth: 30,
          //   boxHeight: 10,
          font: {
            // 범례의 폰트 스타일 지정.
            family: "'Noto Sans KR', 'serif'",
            lineHeight: 1,
          },
        },
      },
    },
  };

  return (
    <Container width={width} height={height}>
      <Scatter data={data} options={options} />
    </Container>
  );
};
export default ScatterChart;
