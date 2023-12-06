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
import CommonHeader from "./components/CommonHeader";
import { radioCss, radioOptions } from "./components/Common/Static";
import { Route, Routes, useNavigate } from "react-router-dom";
import TestPage from "./components/TestPage";

const App = () => {
  const [checked, setChecked] = useState("all");

  /**
   * 이벤트 핸들러
   * dispatch나 setState로 상태 변경
   * @param {*} e
   * @param {*} value 선택된 값
   */
  const onChangeHandler = (e, value) => {
    setChecked(value);
  };

  const NotFound = () => {
    const navigate = useNavigate();
    return (
      <>
        <Wrap>
          <h1>페이지 없다아앙아</h1>
          <button onClick={() => navigate("/")}>홈으로 가기</button>
        </Wrap>
      </>
    );
  };

  const Inside = () => {
    return (
      <>
        <CommonRadioBox
          title={"세트 분석"}
          options={radioOptions}
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
      </>
    );
  };

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<CommonHeader />}>
        {/* <Route path="/home" element={<CommonHeader />}> */}
        <Route path="team" element={<TestPage Page={Inside} />} />
      </Route>
    </Routes>

    /* <CommonRadioBox
        title={"세트 분석"}
        options={radioOptions}
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
      /> */
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;

const CommonPagelayout = styled.d;
