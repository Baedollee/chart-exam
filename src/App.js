import ReactApexChart from "react-apexcharts";
import "./App.css";
import Chart from "./components/Chart";
import ColumnCharts from "./components/ColumnCharts";

const App = () => {
  const data = [
    { label: "선주  ", value: 95 },
    { label: "윤선  ", value: 1 },
    { label: "성열", value: 100 },
    { label: "주석  ", value: 5 },
    { label: "호재", value: 15 },
    { label: "승호  ", value: 25 },
  ];
  const style = {
    chartWidth: "1000px",
    chartHeight: "500px",
    chartForeColor: "black",
    chartBackground: "white",
  };

  return (
    <div>
      {/* <Chart data={data} style={style} /> */}
      <ColumnCharts />
    </div>
  );
};

export default App;
