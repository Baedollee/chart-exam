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
 * 분포 차트
 * @data 데이타 셋 / type : []
 * @options 옵션 셋 / type : {}
 * @width 차트 컨테이너 너비 / default : '100%' / type : string
 * @height 차트 컨테이너 높이 / default : '100%' / type : string
 * @returns 분포 차트
 */
const ScatterChart = ({ data, options, width, height }) => {
  const { xLabelTitle, yLabelTitle, labelColor, max } = options;

  const receiveData = Array.isArray(data) ? data : [];

  const dataList = {
    datasets: receiveData?.map((i) => {
      const { name, data, pointerColor, xLineValue, yLineValue } = i;

      return {
        label: name,
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
        xLineValue,
        yLineValue,
      };
    }),
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

  const xLineValue = dataList["datasets"][0]?.xLineValue || 10;
  const yLineValue = dataList["datasets"][0]?.yLineValue || null;

  const linePlugin = {
    beforeDraw: (chart) => {
      // x축 선 그리기
      if (xLineValue !== null) {
        const ctx = chart.ctx;
        const xAxis = chart.scales["x"];
        const yPos = chart.scales["y"].bottom;
        const xPos = xAxis.getPixelForValue(xLineValue);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(xPos, chart.scales["y"].bottom - chart.scales["y"].height);
        ctx.lineTo(xPos, yPos);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "orange";
        ctx.stroke();
        ctx.restore();
      }
      // y축 선 그리기
      if (yLineValue !== null) {
        const ctx = chart.ctx;
        const yAxis = chart.scales["y"];
        const xPos = chart.scales["x"].right;
        const yPos = yAxis.getPixelForValue(yLineValue);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(chart.scales["x"].right - chart.scales["x"].width, yPos);
        ctx.lineTo(xPos, yPos);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  const defaultOptions = {
    // 사용자가 높이 너비 조정할 수 있게, false로 해놔야함
    maintainAspectRatio: false,
    responsive: true,

    // 점의 굵기
    radius: 4,
    // 점의 색상
    pointBackgroundColor: "skyblue",

    interaction: {
      //   intersect: false,
    },

    // 선 두께
    borderWidth: 2,

    layout: {},

    elements: {},

    scales: {
      y: {
        axis: "y", // 이 축이 y축임을 명시해줍니다.
        beginAtZero: true,

        min: 0,
        max: max ? maxCheck : Math.round(maxCheck / 10) * 10,

        // afterDataLimits: (axis) => {
        // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
        // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
        // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
        //   if (!yLabelTitle) {
        //     axis.max = axis.max * 1.2;
        //   }
        // },

        border: {
          z: 0,
          color: "lightGray",
          width: 1,
          dash: (ctx) => {
            if (ctx.tick.value === yLabelTitle) {
              return [0];
            } else {
              return [8];
            }
          }, // 그리드 선의 길이와 간격 type number[]
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
        autoSkip: false, // 라벨이 겹치지 않도록 자동으로 건너뛰기
        autoSkipPadding: 100,
        beginAtZero: true,

        min: 0,
        // max: 100,

        afterDataLimits: (scale) => {
          // y축의 최대값은 데이터의 최대값에 딱 맞춰져서 그려지므로
          // y축 위쪽 여유공간이 없어 좀 답답한 느낌이 들 수 있는데요,
          // 이와 같이 afterDataLimits 콜백을 사용하여 y축의 최대값을 좀 더 여유있게 지정할 수 있습니다!
          //   scale.max = scale.max * 1.2;
        },

        border: {
          z: 0,
          color: "lightGray",
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

        // 눈금 선 설정
        grid: {
          display: false,
          // 눈금 선 0 이상부터
          drawTicks: false,
          // color: (ctx) => {
          //   if (ctx.tick.value === xLabelValue) {
          //     return "orange";
          //   }
          // },
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
      <Scatter
        data={dataList}
        options={defaultOptions}
        plugins={[linePlugin]}
      />
    </Container>
  );
};
export default ScatterChart;
