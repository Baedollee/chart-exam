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
  horizontalBarDataList,
  horizontalBarOptions,
  lineDataList,
  lineOptions,
  scatterDataList,
  scatterOption,
} from "./components/ChartsJS/DataSet";
import { useState } from "react";

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
  const [checked, setChecked] = useState("all");

  /**
   * 공용 라디오 컴포넌트
   * @title 라디오 컴포넌트 타이틀 값 / type : string | int
   * @options 라디오 컴포넌트 옵션 리스트 / type : []
   * @checked 부모의 state 값 넘겨주기
   * @onChange 이벤트 핸들러 함수
   */

  /**
   * @options type : []
   * @label 라디오버튼의 이름 / type : string | int
   * @value 라디오버튼의 값 / type : string | int
   */
  const options = [
    { label: "전체", value: "all" },
    { label: "성열", value: 1 },
    { label: "인호", value: 2 },
    { label: "현국", value: 4 },
    { label: "소라", value: 3 },
  ];

  /**
   * 이벤트 핸들러
   * dispatch나 setState로 상태 변경
   * @param {*} e
   * @param {*} value 선택된 값
   */
  const onChangeHandler = (e, value) => {
    setChecked(value);
  };

  /**
   * @width 컨테이너 너비 / default : '100% / type : string
   * @height 컨테이너 높이 / default : '100% / type : string
   * @titleFontSize 제목 사이즈 / default : '12px' / type : string
   * @labelFontSize 라벨 사이즈 / default : '12px' / type : string
   */
  const radioCss = {
    width: "173px",
    height: "100%",
    titleFontSize: "21px",
    labelFontSize: "16px",
  };

  return (
    <Wrap>
      <GlobalStyles />

      <CommonRadioBox
        title={"세트 분석"}
        options={options}
        checked={checked}
        onChange={onChangeHandler}
        css={radioCss}
      />

      <HorizontalBarChart
        data={horizontalBarDataList}
        options={horizontalBarOptions}
        width={"20rem"}
        height={"20rem"}
      />

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
