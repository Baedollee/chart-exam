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
  halfDoughnutDummyData,
  halfDoughnutDummyOption,
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
  // const barDataList = [
  //   {
  //     name: "선수1",
  //     data: [
  //       { xValue: "선수1 ~ 선수2", yValue: 30 },
  //       { xValue: "선수2 ~ 선수3", yValue: 100 },
  //       { xValue: "선수3 ~ 선수4", yValue: 50 },
  //       { xValue: "선수4 ~ 선수5", yValue: 40 },
  //       { xValue: "선수5 ~ 선수6", yValue: 60 },
  //     ],
  //     barColor: "skyblue",
  //   },
  // ];

  return (
    <Wrap>
      <GlobalStyles />
      <HorizontalBarChart data={barDataList} width={"10rem"} height={"10rem"} />

      <BarChart
        data={barDataList}
        options={barOptions}
        width={"10rem"}
        height={"10rem"}
      />

      <DoughnutChart
        data={doughnutDataList}
        options={doughnutOptions}
        width={"10rem"}
        height={"10rem"}
      />

      <LineChart
        data={lineDataList}
        options={lineOptions}
        width={"10rem"}
        height={"10rem"}
      />

      <ScatterChart
        data={scatterDataList}
        options={scatterOption}
        width={"10rem"}
        height={"10rem"}
      />
      <HalfDoughnutChart
        data={halfDoughnutDummyData}
        option={halfDoughnutDummyOption}
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
