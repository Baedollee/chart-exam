import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ data, width, height, style }) => {
  const options = {
    dataLabels: {
      //   enabled: true,
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: true,
      fontSize: "14px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 100,
      offsetY: 100,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#706666",
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },

    chart: {
      type: "line",
      width: "100%",
      height: 200,

      foreColor: style.chartForeColor,
      background: style.chartBackground,
      //   offsetX: 100,
      //   offsetY: 100,

      optionsArea: {
        chart: {
          id: "yt",
          group: "social",
          type: "area",
          height: 160,
        },
        colors: ["#00E396"],
      },

      /// 애니메이션 영역
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 500,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },

      /// 툴바 영역
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ",",
            headerCategory: "category",
            headerValue: "value",
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString();
            },
          },
          svg: {
            filename: undefined,
          },
          png: {
            filename: undefined,
          },
        },
        autoSelected: "selection",
      },
    },

    title: {
      text: "외로움 그래프",
      align: "left",
    },

    grid: {
      show: true,
      position: "back",
      xaxis: {
        line: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    colors: ["red"],
    // ApexFill: {
    //   colors: "yellow",
    // },

    yaxis: {
      title: {
        text: "외로움 수치",
      },
      min: 0,
      max: 100,
    },

    xaxis: {
      type: "category",
      categories: data?.map((i) => i.label),

      tooltip: {
        enabled: true,
      },
    },
  };

  const chartValue = data?.map((i) => {
    return i.value;
  });

  const series = [
    {
      name: "sales22",
      data: chartValue,
    },
  ];

  console.log(style.chartWidth || width || "100px");
  return (
    <>
      <ReactApexChart
        // type="line"
        // options={options.options}
        // series={options.series}
        options={options}
        series={series}
        width={width || style.chartWidth || "auto"}
        height={height || style.chartHeight}
      />
    </>
  );
};

export default Chart;
