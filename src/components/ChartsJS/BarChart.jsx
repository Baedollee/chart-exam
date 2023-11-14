import React, { useEffect } from "react";
import styled from "styled-components";
// import Chart from "chart.js/auto"; // 얜 플러그인 자동으로
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

export const CustomTitle = {
  id: "customTitle",
  beforeLayout: (chart, args, opts) => {
    const { display, font } = opts;
    if (!display) {
      return;
    }

    const { ctx } = chart;
    ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif';
    const { width } = ctx.measureText(opts.text);
    chart.options.layout.padding.left = width * 1.1;
  },
  afterDraw: (chart, args, opts) => {
    const { font, text, color } = opts;
    const {
      ctx,
      chartArea: { left, right },
      canvas: { offsetLeft, offsetTop },
    } = chart;

    if (opts.display) {
      ctx.fillStyle = color || Chart.defaults.color;
      ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif';
      ctx.fillText(text, offsetLeft * 1.4, offsetTop / 0.5);
    }
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CustomTitle
);

const BarChart = () => {
  const xLabels = ["0~8", "8~16", "17~20", "21~24", "25~(듀스)"];

  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "선수1",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "선수2",
        data: [80, 70, 60, 50, 40],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    // 사용자가 높이 너비 조정할 수 있게, false로 해놔야함
    maintainAspectRatio: false,

    responsive: true,

    maxBarThickness: 50, // 바 두께
    borderRadius: 5,

    // 바 간격
    barPercentage: 0.8,
    categoryPercentage: 0.8,

    // 호버 동작과 관련된 설정 , 호버를 하게 되면 툴팁이 뜨게 되는데 툴팁 뜨는 기준 설정
    // index를 기준으로 설정하게 되면 동일한 index에 놓인 값들이 모두 떠요!
    interaction: {
      mode: "nearest",
    },

    layout: {
      padding: {
        left: 0,
      },
    },

    elements: {
      bar: {
        backgroundColor: "red",
        // borderWidth: 5,
      },
    },

    scales: {
      y: {
        axis: "y", // 이 축이 y축임을 명시해줍니다.
        afterDataLimits: (scale) => {
          // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
          // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
          // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
          scale.max = scale.max * 1.2;
        },

        // beginAtZero: true,
        min: 0,
        max: 100,

        title: {
          // 이 축의 단위 또는 이름도 title 속성을 이용하여 표시할 수 있습니다.
          display: false,
          padding: { bottom: 0, top: 0 },
          align: "end",
          color: "black",

          font: {
            size: 12,
            family: "'Noto Sans KR', sans-serif",
            weight: 500,
          },
          text: "(회)",
        },

        // 눈금선 설정
        grid: {
          //   display: false,
          //   drawOnChartArea: true,
          drawTicks: false,
          color: "lightgray",
        },

        ticks: {
          beginAtZero: true,
          stepSize: 20,
          callback: (value, index, ticks) => {
            if (value !== 0) {
              return value;
            }
          },
          backdropColor: "blue",
          padding: 7,
        },

        border: {
          z: 0,
          color: "red",
          width: 1,
          dash: [8], // 그리드 선의 길이와 간격 type number[]
        },
      },
      // y 축 하나 더 필요하면
      //   y_sub: {
      //     position: "right",
      //     title: {
      //       display: true,
      //       align: "end",
      //       color: "#808080",
      //       font: {
      //         size: 12,
      //         family: "'Noto Sans KR', sans-serif",
      //         weight: 300,
      //       },
      //       text: "단위: 배",
      //     },
      //   },

      x: {
        axis: "x", // x축(가로축)인지 y축(세로축)인지 표시합니다.
        // barPercentage: 1.0,
        // categoryPercentage: 1.0,

        // 눈금 선 설정
        grid: { drawTicks: false, color: "white" },

        border: {
          z: 0,
          color: "blue",
          width: 1,
        },

        ticks: {
          minRotation: 0, // x축 값의 회전 각도를 설정
          padding: 5, // x축 값의 상하 패딩을 설정
        },
      },
    },

    plugins: {
      // 내부 라벨 표시 여부
      datalabels: {
        display: false,
      },

      // 범례 스타일링
      legend: {
        position: "bottom",
        align: "center",

        labels: {
          // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시됩니다.
          usePointStyle: false,
          // 범례 간 가로 간격을 조정할 수 있습니다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않음
          padding: 10,
          boxWidth: 30,
          //   boxHeight: 10,
          font: {
            // 범례의 폰트 스타일 지정.
            family: "'Noto Sans KR', 'serif'",
            lineHeight: 1,
          },
        },
      },
      tooltip: {},

      title: {
        display: true,
        text: "점수대별 서브 성공&범실",
        // position: "start",
        // align: "center",
      },
      customTitle: {
        display: true,
        text: "(회)",
        color: "black",
      },
    },
  };

  return (
    <Container>
      {/* <Doughnut data={DoughnutData} options={DoughnutOptions} /> */}
      <Bar options={options} data={data} />
    </Container>
  );
};

export default BarChart;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
`;
