import "./App.css";
import BarChart from "./components/ChartsJS/BarChart";
import HorizontalBarChart from "./components/ChartsJS/HorizontalBarChart";
import LineChart from "./components/ChartsJS/LineChart";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <HorizontalBarChart />
      <BarChart labelColor={"gray"} />
      <LineChart />
    </div>
  );
};

export default App;
