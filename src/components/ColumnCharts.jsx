import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const ColumnCharts = () => {
  const options = {
    //! 차트 바 색상 // list 형태
    colors: ["#007cf7", "#8d928a"],

    //! 차트 기본 설정
    chart: {
      // offsetY: 100,
      // offsetX: 100,
      height: "100%",
      type: "bar",
      // 툴바 보여주기 여부 및 설정
      toolbar: {
        show: false,
      },

      // 애니메이션 여부 및 설정
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      // 차트 그림자 여부 및 설정
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      // 차트 폰트 및 색상
      fontFamily: "Helvetica, Arial, sans-serif",
      foreColor: "black",

      // 차트 요소 변경시 리랜더링 여부
      redrawOnParentResize: true,
    },

    //! 주석 설정
    annotations: {
      show: true,
    },

    //! 그래프 바 설정
    plotOptions: {
      bar: {
        horizontal: false, // 그래프 수직 수평 설정
        borderRadius: 0, // 그래프 라운드 설정
        endingShape: "rounded",
        columnWidth: "60%", // 그래프 바 두께 설정
        barHeight: "100%",
        distributed: false,
      },
    },

    //!
    dataLabels: {
      enabled: false,
    },
    //!
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },

    //! x축 설정
    xaxis: {
      categories: ["0~8", "21~24", "25~(듀스)"],
      // tickPlacement: "on",
    },

    //! y 축 설정
    yaxis: {
      show: true,
      showAlways: true,
      // 제목설정
      title: {
        text: "(회)",
        rotate: -360,
        offsetY: 0,
        offsetX: 0,
      },
      //
      labels: {
        offsetX: 0,
        offsetY: -50,
      },

      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        width: 0,
        offsetX: 0,
        offsetY: 0,
      },

      // logBase: 20,
      tickAmount: 5, // y축 표시할 선 간격 수
      min: 20, // y축 시작 설정
      max: 120, // y축 끝 설정
    },

    fill: {
      opacity: 20,
    },

    //! 툴박스 설정 // 마우스 호버시 뜨는 정보 설정
    tooltip: {
      // 보여줄지 말지 설정
      enabled: true,
      // 마우스 따라 갈건지 말건지
      followCursor: true,
      // 마우스가 바 위에 있을때만 보여주는
      intersect: true,
      // 바 색상과 툴팁 색상 같이 할건지
      fillSeriesColor: false,
      //
      theme: false,
      style: {
        fontSize: "15px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      // 툴팁 제목 설정
      x: {
        show: true,
        format: "text",
        formatter: () =>
          // val,
          // { series, seriesIndex, dataPointIndex, w }
          {
            return "으아아아";
          },
      },
      // 툴팁 내용 설정
      y: {
        formatter: (
          val
          // { series, seriesIndex, dataPointIndex, w }
        ) => {
          return val + "점";
        },
      },

      // 툴박스 내용 앞 점 표시 여부
      marker: {
        show: true,
      },

      items: {
        display: "flex",
      },

      // 툴박스 고정
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },

      //? 커스텀 영역
      // custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      //   return (
      //     '<div class="arrow_box">' +
      //     "<span>" +
      //     w.globals.labels[dataPointIndex] +
      //     ": " +
      //     series[seriesIndex][dataPointIndex] +
      //     "</span>" +
      //     "</div>"
      //   );
      // },
    },

    // 범례 여부 및 설정
    legend: {
      show: true,
      // 차트가 하나일때도 보일지 여부
      showForSingleSeries: false,
      // 값이 null 경우 범례 표시 안함
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "start",
      floating: false,
      fontSize: "20px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 700,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 10,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      // 범례 아이콘 설정
      markers: {
        width: 30,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: -20,
        offsetY: 0,
      },
      // 범례 사이 설정
      itemMargin: {
        horizontal: 50,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
    // 바 클릭시 커스텀 옵션
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "lighten",
          value: 0.05,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "darken",
          value: 0.35,
        },
      },
    },
  };

  const series = [
    {
      name: "배성열",
      data: [20, 30, 40],
    },
    {
      name: "강인호",
      data: [50, 85, 60],
    },
  ];

  return (
    <>
      <ReactApexChartStyled
        type="bar"
        options={options}
        series={series}
        width={"1000px"}
        height={"300px"}
      />
    </>
  );
};

const ReactApexChartStyled = styled(ReactApexChart)`
  .apexcharts-tooltip {
    display: flex;
    background: yellow;
    color: orange;
  }
`;

export default ColumnCharts;
