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
export const radioOptions = [
  { label: "전체", value: "all" },
  { label: "성열", value: 1 },
  { label: "인호", value: 2 },
  { label: "현국", value: 4 },
  { label: "소라", value: 3 },
];

/**
 * @width 컨테이너 너비 / default : '100% / type : string
 * @height 컨테이너 높이 / default : '100% / type : string
 * @titleFontSize 제목 사이즈 / default : '12px' / type : string
 * @labelFontSize 라벨 사이즈 / default : '12px' / type : string
 */
export const radioCss = {
  width: "200px",
  height: "12rem",
  titleFontSize: "21px",
  labelFontSize: "16px",
};
