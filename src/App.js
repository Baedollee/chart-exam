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
