import "./App.css";
import BarChart from "./components/ChartsJS/BarChart";
import HorizontalBarChart from "./components/ChartsJS/HorizontalBarChart";

const App = () => {
  return (
    <div>
      {/* <Chart data={data} style={style} /> */}
      {/* <ColumnCharts /> */}
      <BarChart />
      <HorizontalBarChart />
    </div>
  );
};

export default App;
