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

// const LineCustomYTitle = {
//   id: "lineCustomYTitle",
//   beforeLayout: (chart, args, opts) => {
//     const { display, font } = opts;
//     if (!display) {
//       return;
//     }

//     const { ctx } = chart;
//     ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif';
//     const { width } = ctx.measureText(opts.text);

//     chart.options.layout.padding.left = width * 1;
//   },
//   afterDraw: (chart, args, opts) => {
//     const { font, text, color } = opts;
//     const {
//       ctx,
//       chartArea: { left, right, top, bottom, height, width },
//       canvas: { offsetLeft, offsetTop, offsetBottom },
//     } = chart;
//     if (opts.display) {
//       //   console.log("LineCustomYTitle", chart);

//       ctx.fillStyle = color || Chart.defaults.color;
//       ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif';
//       ctx.fillText(text, (right - width) * 0.5, bottom - height);
//     }
//   },
// };

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
 * 라인 차트
 * @data 데이타 셋 / type : []
 * @options 옵션 셋 / type : {}
 * @width 차트 컨테이너 너비 / default : '100%' / type : string
 * @height 차트 컨테이너 높이 / default : '100%' / type : string
 * @returns 라인 차트
 */
const LineChart = ({ data, options, width, height }) => {
  const { xLabelTitle, yLabelTitle, labelColor, max } = options;

  const receiveData = Array.isArray(data) ? data : [];

  const dataList = {
    datasets: [
      {
        type: "bar",
        label: null,
        backgroundColor: "white",
        borderColor: "white",
      },
      ...receiveData?.map((i) => {
        if (i) {
          const { name, data, lineColor, pointerColor } = i;

          return {
            type: "line",
            label: name,
            borderColor: lineColor || "#" + randomRgbHex(),
            pointBackgroundColor: pointerColor || "#" + randomRgbHex(),
            data: data?.map((i) => {
              if (i) {
                const { xValue, yValue } = i;
                return {
                  x: xValue,
                  y: yValue,
                };
              }
              return { x: "", y: "" };
            }),
          };
        }
        return null;
      }),
    ],
  };

  const dataMaxNum = Math.max(
    ...dataList?.datasets
      ?.map((i) => {
        if (i.data) {
          return i?.data;
        }
        return null;
      })
      ?.flat()
      ?.map((i) => {
        if (i?.y) {
          return i.y;
        }
        return null;
      })
  );

  const maxCheck = max ? max * 1.2 : dataMaxNum * 1.2;

  const defaultOptions = {
    // 사용자가 높이 너비 조정할 수 있게, false로 해놔야함
    maintainAspectRatio: false,
    responsive: true,

    // 점의 굵기
    radius: 5,
    // 점의 색상
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

      x: {
        axis: "x", // x축(가로축)인지 y축(세로축)인지 표시합니다.
        // barPercentage: 1.0,
        // categoryPercentage: 1.0,
        autoSkip: false, // 라벨이 겹치지 않도록 자동으로 건너뛰기
        autoSkipPadding: 100,
        // 눈금 선 설정
        grid: { display: false, drawTicks: false, color: "white" },

        border: {
          z: 0,
          color: labelColor || "lightgray",
          width: 1,
        },

        // 라벨 설정
        ticks: {
          color: labelColor || "lightgray",
          minRotation: 0, // x축 값의 회전 각도를 설정
          // callback: (value, index, ticks) => {
          //   if (index === ticks.length) {
          //     return xLabelTitle;
          //   }
          //   return;
          // },
          padding: 5, // x축 값의 상하 패딩을 설정
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
        display: false,
        text: "선 차트",
      },

      // lineCustomYTitle: {
      //   display: true,
      //   text: "(%)",
      //   color: "black",
      // },

      // 범례 스타일링
      legend: {
        display: false,
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
      <Line
        options={defaultOptions}
        data={dataList}
        // plugins={[LineCustomYTitle]}
      />
    </Container>
  );
};

export default LineChart;
