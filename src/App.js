import styled from "styled-components";
import "./App.css";
import BarChart from "./components/ChartsJS/BarChart";
import DoughnutChart from "./components/ChartsJS/DoughnutChart";
import HorizontalBarChart from "./components/ChartsJS/HorizontalBarChart";
import LineChart from "./components/ChartsJS/LineChart";
import HalfDoughnutChart from "./components/ChartsJS/HalfDoughnutChart";

const App = () => {
  const dummy = {
    label: "선수1",
    data: [
      { x: "0~8", y: 40 },
      { x: "8~16", y: 100 },
      { x: "17~20", y: 80 },
      { x: "21~24", y: 50 },
      { x: "25~(듀스)", y: 80 },
    ],
    backgroundColor: "orange",
  };

  const dummy2 = {
    label: "선수2",
    data: [
      { x: "0~8", y: 60 },
      { x: "8~16", y: 200 },
      { x: "17~20", y: 80 },
      { x: "21~24", y: 50 },
      { x: "25~(듀스)", y: 80 },
    ],
    backgroundColor: "skyblue",
  };

  const option = {
    name: ["선수1"],
  };

  const doughnutDummyOption = {
    width: 200,
    fontSize: 30,
  };

  const doughnutDummyData = {
    xValue: 40,
    barColor: "yellow",
  };

  return (
    <Wrap>
      <HorizontalBarChart />
      <BarChart
        labelColor={"gray"}
        //  max={0}
      />
      <LineChart />
      <DoughnutChart />
      <HalfDoughnutChart
        data={doughnutDummyData}
        option={doughnutDummyOption}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  /* flex-wrap: wrap; */
`;

export default App;
