import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
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
 * 하프도넛 차트
 * @data 데이타 셋 / type : {}
 * @options 옵션 셋 / type : {}
 * @width 차트 컨테이너 너비 / default : '100%' / type : string
 * @height 차트 컨테이너 높이 / default : '100%' / type : string
 * 너비와 높이 비율을 너비 = 높이 * 2 로 하는걸 추천
 * @returns 하프도넛 차트
 */
const HalfDoughnutChart = ({ data, option, width, height }) => {
  const { xValue, barLineValue, barLineColor, barColor } = data;

  const { fontSize } = option;

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
        backgroundColor: [barColor || "#" + randomRgbHex(), "lightGray"],
        hoverBackgroundColor: [barColor || "#" + randomRgbHex(), "lightGray"],
      },
    ],
  };

  const customPlugin = {
    id: "doughnutPointer",

    beforeLayout: (chart, args, opts) => {
      const { display } = opts;
      if (!display) {
        return;
      }
    },

    afterDraw: (chart, args, opts) => {
      const { ctx, data } = chart;
      const { dataValue, value, color, fontSize } = opts;

      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const angle = Math.PI / 180;

      const doughnutThickness = outerRadius - innerRadius;

      const sumArray = (arr) => {
        return arr.reduce((acc, current) => acc + current, 0);
      };

      const dataPointArray = data.datasets[0].data.map((dataPoint, index) => {
        return dataPoint;
      });

      const pointValue = value || null; // 바 그려지는 위치
      const totalSum = sumArray(dataPointArray);
      // const pointValuePercentage = (xValue / totalSum) * 100;
      const targetPointerRotation = (pointValue / totalSum) * 180 - 90;

      // pointer
      ctx.save();

      ctx.translate(centerX, centerY);
      ctx.rotate(angle * targetPointerRotation);
      ctx.beginPath();
      ctx.fillStyle = color || "black";
      ctx.roundRect(
        0,
        0 - outerRadius,
        3, //너비
        doughnutThickness, // 길이
        5
      );
      ctx.fill();

      ctx.restore();

      //text
      ctx.font = `bold ${fontSize} sans-serif`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(`${dataValue.toFixed(1)}%`, centerX, centerY);
    },
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
      title: {
        display: false,
        position: "bottom",
        text: "도넛 차트다아아",
      },

      datalabels: { display: false },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      doughnutPointer: {
        display: true,
        dataValue: num,
        value: barLineValue,
        color: barLineColor,
        fontSize: fontSize,
      },
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
    }
  }, [barLineValue, barLineColor]);

  return (
    <Container width={width} height={height}>
      <Doughnut
        ref={chartRef}
        data={chartData}
        options={options}
        plugins={[customPlugin]}
      />
    </Container>
  );
};

export default HalfDoughnutChart;
