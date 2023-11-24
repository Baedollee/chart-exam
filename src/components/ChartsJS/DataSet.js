/**
 * @dataList type :[] / 단일 바 차트로 이용시 [{}] dataList 배열에 하나의 객체만 [{}]
 * @name 해당 바의 이름 / default : null / type : string || int
 * @data type :[]
 * @xValue x축 라벨 / default : null / type : string
 * @yValue 차트에 그려지는 값 / 필수값! / type : string || int
 * @barColor : 바 색상 / default : 'blue' / type : string
 */
export const barDataList = [
  {
    name: "선수1",
    data: [
      { xValue: "0~8", yValue: 10 },
      { xValue: "8~16", yValue: 110 },
      { xValue: "17~20", yValue: 40 },
      { xValue: "21~24", yValue: 90 },
      { xValue: "25~(듀스)", yValue: 20 },
    ],
    barColor: "skyblue",
  },
  {
    name: "선수2",
    data: [
      { xValue: "0~8", yValue: 60 },
      { xValue: "8~16", yValue: 50 },
      { xValue: "17~20", yValue: 80 },
      { xValue: "21~24", yValue: 50 },
      { xValue: "25~(듀스)", yValue: 80 },
    ],
    barColor: "red",
  },
];

/**
 * @yLabelTitle : y축 단위 이름 / default : null / type : string
 * @xLabelTitle : x축 단위 이름 / default : null / type : string
 * @labelColor : 라벨폰트 색상 / default : lightGray / type : string
 * @max : y축 그래프 최대 값 설정 / default : yValue max Value in Array / type : int
 */
export const barOptions = {
  xLabelTitle: "이상",
  yLabelTitle: "(회)",
  labelColor: "black",
  max: 100,
};

/**
 * @data type :[]
 * @xValue 영역 이름 / default : null / type : string
 * @yValue 영역에 그려지는 값 / 필수값! / type : string || int
 * 총합이 100이 넘어갈 시 알아서 100% 비율로 계산
 * @color : 영역 색상 / default : 랜덤색상 / type : string
 */
export const doughnutDataList = [
  { xValue: "김연경", yValue: 20, color: "orange" },
  { xValue: "배성열", yValue: 35, color: "skyBlue" },
  { xValue: "강인호", yValue: 45, color: "tan" },
];

/**
 * @fontSize 글자크기 / default : '21px' / type : string
 * @borderWidth 영역의 간격 너비 / default : 0 / type : int
 * @cutout 도넛 안에 원 너비 / default : '50%' / type : string
 */
export const doughnutOptions = {
  fontSize: "20px",
  borderWidth: 0,
  cutout: "40%",
};

/**
 * @dataList type :[] / 단일 라인 차트로 이용시 [{}] dataList 배열에 하나의 객체만 [{}]
 * @name 해당 라인의 이름 / default : null / type : string || int
 * @data type :[]
 * @xValue x축 라벨 / default : null / type : string
 * @yValue 차트에 그려지는 값 / 필수값! / type : string || int
 * @lineColor  라인 색상 / default : 랜덤색상 / type : string
 * @pointerColor 점 색상 / default : 랜덤색상 / type : string
 */
export const lineDataList = [
  {
    name: "리그평균",
    data: [
      { xValue: "0~4", yValue: 40 },
      { xValue: "5~8", yValue: 100 },
      { xValue: "9~12", yValue: 80 },
      { xValue: "13~16", yValue: 50 },
      { xValue: "17~21", yValue: 80 },
      { xValue: "22~25", yValue: 30 },
      { xValue: "26~회", yValue: 70 },
    ],
    lineColor: "red",
    pointerColor: "red",
  },
  {
    name: "김연경",
    data: [
      { xValue: "0~4", yValue: 10 },
      { xValue: "5~8", yValue: 50 },
      { xValue: "9~12", yValue: 30 },
      { xValue: "13~16", yValue: 90 },
      { xValue: "17~21", yValue: 100 },
      { xValue: "22~25", yValue: 20 },
      { xValue: "26~회", yValue: 100 },
    ],
    lineColor: "blue",
    pointerColor: "blue",
  },
];

/**
 * @yLabelTitle : y축 단위 이름 / default : null / type : string
 * @xLabelTitle : x축 단위 이름 / default : null / type : string
 * @labelColor : 라벨폰트 색상 / default : lightGray / type : string
 * @max : y축 그래프 최대 값 설정 / default : max yValue in Array / type : int
 */

export const lineOptions = {
  xLabelTitle: "",
  yLabelTitle: "(회)",
  labelColor: "lightGray",
  max: 100,
};

/**
 * @dataList type :[] / 단일 라인 차트로 이용시 [{}] dataList 배열에 하나의 객체만 [{}]
 * @name 해당 라인의 이름 / default : null / type : string || int
 * @data type :[]
 * @xValue x축 좌표값 / 필수값! / type : string || int
 * @yValue y축 좌표값 / 필수값! / type : string || int
 * @pointerColor 점 색상 / default : 랜덤색상 / type : string
 * @xLineValue  x축에 선 위치값 (점유율?)/ default : 10 / type : int
 * @yLineValue  y축에 선 위치값 (평균 효율?) / default : null / type : int
 */
export const scatterDataList = [
  {
    name: "김선수(대한항공)",
    data: [
      { xValue: 1.2, yValue: 40 },
      { xValue: 25, yValue: 100 },
      { xValue: 20, yValue: 80 },
      { xValue: 8, yValue: 50 },
      { xValue: 7, yValue: 80 },
      { xValue: 6, yValue: 30 },
      { xValue: 4, yValue: 70 },
      { xValue: 2, yValue: 40 },
      { xValue: 24, yValue: 120 },
      { xValue: 40, yValue: 80 },
      { xValue: 2, yValue: 50 },
      { xValue: 3, yValue: 80 },
      { xValue: 5, yValue: 30 },
      { xValue: 1, yValue: 70 },
    ],
    pointerColor: "red",
    xLineValue: 10,
    yLineValue: 40,
  },
];

/**
 * @yLabelTitle : y축 단위 이름 / default : null / type : string
 * @xLabelTitle : x축 단위 이름 / default : null / type : string
 * @labelColor : 라벨폰트 색상 / default : lightGray / type : string
 * @max : y축 그래프 최대 값 설정 / default : max yValue in Array / type : int
 */
export const scatterOption = {
  xLabelTitle: "",
  yLabelTitle: "(회)",
  labelColor: "blue",
  max: null,
};

/**
 * @fontSize 글자크기 / default : '21px' / type : spring
 */
export const halfDoughnutDummyOption = {
  fontSize: "20px",
};

/**
 * @xValue 그래프 채워지는 값 / default : null / type : int
 * @barColor 채워지는 색상 / 랜덤색상 / type : spring
 * @barLineValue 차트에 그려지는 선 위치 값 / default : null / type : int
 * @barLineColor 선 색상 / default : 'black' / type : int
 */
export const halfDoughnutDummyData = {
  xValue: 60,
  barColor: "red",
  barLineValue: 40,
  barLineColor: "blue",
};
