import React from "react";
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
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

/**
 * 막대 차트
 * @data 데이타 셋 / type : {}
 * @options 옵션 셋 / type : {}
 * @width 차트 컨테이너 너비 / default : '100%' / type : string
 * @height 차트 컨테이너 높이 / default : '100%' / type : string
 * @returns 막대 차트
 */
const BarChart = ({ data, options, width, height }) => {
  const { xLabelTitle, yLabelTitle, labelColor, max } = options;

  const newData =
    data &&
    Array.isArray(data) &&
    data.map((i) => {
      const { name, data, barColor } = i;

      const newArray = data?.map((j) => {
        const { xValue, yValue } = j;
        return { x: xValue || "", y: yValue || 0 };
      });

      return { label: name, data: newArray, backgroundColor: barColor };
    });

  const dataList = newData ? { datasets: [...newData] } : { datasets: [] };

  const dataMaxNum = Math.max(
    ...dataList?.datasets
      ?.map((i) => i.data)
      ?.flat()
      ?.map((i) => i.y)
  );

  const maxCheck = max ? max * 1.2 : dataMaxNum * 1.2;

  const xLabel = [
    ...dataList?.datasets
      ?.map((i) => i.data)
      ?.flat()
      ?.map((i) => i.x),
  ];

  const uniqueLabelArray = [...new Set(xLabel), "으아아"];
  console.log("TCL: BarChart -> uniqueLabelArray", uniqueLabelArray);

  const defaultOptions = {
    maintainAspectRatio: false, // 사용자가 높이 너비 조정할 수 있게, false로 해놔야함
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
        backgroundColor: "blue",
        // borderWidth: 5,
      },
    },

    scales: {
      y: {
        axis: "y", // 이 축이 y축임을 명시해줍니다.
        min: 0,
        max: max ? maxCheck : Math.round(maxCheck / 10) * 10,
        border: {
          z: 0,
          color: labelColor || "lightGray",
          width: 1,
          dash: [8], // 그리드 선의 길이와 간격 type number[]
        },

        // 눈금선 설정
        grid: {
          drawTicks: false,
          color: (ctx) => {
            if (ctx.tick.label !== yLabelTitle) {
              return labelColor || "lightgray";
            }
          },
        },

        // y축 틱 설정
        ticks: {
          beginAtZero: true,
          minTicksLimit: 5,
          stepSize: Math.round(maxCheck / 6 / 10) * 10,
          callback: (value, index, ticks) => {
            if (value !== 0) {
              if (index === ticks.length - 1) {
                return yLabelTitle;
              }
              return value;
            }
          },
          color: labelColor || "lightgray",
          padding: 8,
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
        autoSkip: false, // 라벨이 겹치지 않도록 자동으로 건너뛰기
        autoSkipPadding: 100,
        beginAtZero: true,

        min: 0,

        // 눈금 선 설정
        grid: { drawTicks: false, color: "white" },

        border: {
          z: 0,
          color: labelColor || "lightgray",
          width: 1,
        },

        // 라벨 설정
        ticks: {
          color: labelColor || "lightgray",
          minRotation: 0, // x축 값의 회전 각도를 설정
          callback: (value, index, ticks) => {
            if (index === ticks.length) {
              return xLabelTitle;
            }
            return uniqueLabelArray[index];
          },
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
        display: false,
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

      // title: {
      //   display: false,
      //   text: "점수대별 서브 성공&범실",
      // },
    },
  };

  return (
    <Container width={width} height={height}>
      <Bar options={defaultOptions} data={dataList} />
    </Container>
  );
};

export default BarChart;
