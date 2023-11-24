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
  lineDataList,
  lineOptions,
  scatterDataList,
  scatterOption,
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
  /**
   * @fontSize 글자크기 / default : '21px' / type : spring
   */
  const doughnutDummyOption = {
    fontSize: "20px",
  };

  /**
   * @xValue 그래프 채워지는 값 / default : null / type : int
   * @barColor 채워지는 색상 / 랜덤색상 / type : spring
   * @barLineValue 차트에 그려지는 선 위치 값 / default : null / type : int
   * @barLineColor 선 색상 / default : 'black' / type : int
   */
  const doughnutDummyData = {
    xValue: 60,
    barColor: "red",
    barLineValue: 40,
    barLineColor: "blue",
  };

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
        width={"20rem"}
        height={"20rem"}
      />

      <LineChart
        data={lineDataList}
        options={lineOptions}
        width={"20rem"}
        height={"20rem"}
      />

      <ScatterChart
        data={scatterDataList}
        options={scatterOption}
        width={"20rem"}
        height={"20rem"}
      />
      <HalfDoughnutChart
        data={doughnutDummyData}
        option={doughnutDummyOption}
        width={"10rem"}
        height={"5rem"}
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
