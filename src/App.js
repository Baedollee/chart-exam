import styled from "styled-components";
import "./App.css";
import BarChart from "./components/ChartsJS/BarChart";
import DoughnutChart from "./components/ChartsJS/DoughnutChart";
import HorizontalBarChart from "./components/ChartsJS/HorizontalBarChart";
import LineChart from "./components/ChartsJS/LineChart";
import HalfDoughnutChart from "./components/ChartsJS/HalfDoughnutChart";

const App = () => {
  return (
    <Wrap>
      <HorizontalBarChart />
      <BarChart labelColor={"gray"} />
      <LineChart />
      <DoughnutChart />
      <HalfDoughnutChart />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 1000px;
`;

export default App;
