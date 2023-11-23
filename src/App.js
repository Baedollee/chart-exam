import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import BarChart from "./components/ChartsJS/BarChart";
import DoughnutChart from "./components/ChartsJS/DoughnutChart";
import HorizontalBarChart from "./components/ChartsJS/HorizontalBarChart";
import LineChart from "./components/ChartsJS/LineChart";
import HalfDoughnutChart from "./components/ChartsJS/HalfDoughnutChart";
import ScatterChart from "./components/ChartsJS/ScatterChart";
import CommonRadioBox from "./components/Common/CommonRadioBox";
import {
  barDataList,
  barOptions,
  doughnutDataList,
  doughnutOptions,
} from "./components/ChartsJS/DataSet";

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    font-size: 20px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    display: flex;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
  }

  input {
    display: flex;
    outline: none;
    padding-left: 10px;
  }

  div{

  }
   
`;

const App = () => {
  const doughnutDummyOption = {
    width: 200,
    // fontSize: 30,
  };

  const doughnutDummyData = {
    xValue: 40,
    barColor: "green",
  };

  /**
   * @dataList type :[] / 단일 라인 차트로 이용시 [{}] dataList 배열에 하나의 객체만 [{}]
   * @name 해당 라인의 이름 / default : null / type : string || int
   * @data type :[]
   * @xValue x축 라벨 / default : null / type : string
   * @yValue 차트에 그려지는 값 / 필수값! / type : string || int
   * @lineColor : 라인 색상 / default : 'blue' / type : string
   */
  const lineDataList = [
    {
      name: "리그평균",
      data: [
        { xValue: "0~4", yValue: 40 },
        { xValue: "5~8", yValue: 100 },
        { xValue: "9~12", yValue: 80 },
        { xValue: "13~16", yValue: 50 },
        { xValue: "17~21", yValue: 80 },
        { xValue: "22~25", yValue: 30 },
        { xValue: "26~회", yValue: 70 },
      ],
      lineColor: "red",
    },
    {
      name: "김연경",
      data: [
        { xValue: "0~4", yValue: 10 },
        { xValue: "5~8", yValue: 50 },
        { xValue: "9~12", yValue: 30 },
        { xValue: "13~16", yValue: 90 },
        { xValue: "17~21", yValue: 100 },
        { xValue: "22~25", yValue: 20 },
        { xValue: "26~회", yValue: 100 },
      ],
      lineColor: "blue",
    },
    {
      name: "으아아아",
      data: [
        { xValue: "0~4", yValue: 4 },
        { xValue: "5~8", yValue: 10 },
        { xValue: "9~12", yValue: 8 },
        { xValue: "13~16", yValue: 5 },
        { xValue: "17~21", yValue: 8 },
        { xValue: "22~25", yValue: 3 },
        { xValue: "26~회", yValue: 7 },
      ],
      lineColor: "green",
    },
  ];

  return (
    <Wrap>
      <GlobalStyles />
      <HorizontalBarChart />

      <BarChart
        data={barDataList}
        options={barOptions}
        width={"20rem"}
        height={"20rem"}
      />

      <DoughnutChart
        data={doughnutDataList}
        options={doughnutOptions}
        width={"10rem"}
        height={"10rem"}
      />

      <LineChart />
      <ScatterChart
        yLabelTitle={"으아아아"}
        yLabelValue={20}
        xLabelTitle={"나나나"}
        xLabelValue={10}
      />
      <HalfDoughnutChart
        data={doughnutDummyData}
        option={doughnutDummyOption}
      />
      <CommonRadioBox />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  flex-wrap: wrap;
`;

export default App;
