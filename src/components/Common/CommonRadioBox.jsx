import React from "react";
import styled from "styled-components";

const CommonRadioBox = ({ title, options, onChange, checked, css }) => {
  const option = Array.isArray(options) ? options : [];

  const { width, height, titleFontSize, labelFontSize } = css;

  return (
    <Wrap width={width} height={height}>
      <Container>
        <TitleContainer titleFontSize={titleFontSize}>
          <span>{title}</span>
        </TitleContainer>
        <ItemContainer>
          {option?.map((i, index) => {
            const { label, value } = i;
            return (
              <React.Fragment key={`${index}_${label}`}>
                <ItemBox labelFontSize={labelFontSize}>
                  <input
                    type="radio"
                    value={value}
                    onChange={(e) => onChange(e, value)}
                    checked={value === checked}
                  />
                  <label htmlFor={value}>{label}</label>
                </ItemBox>
              </React.Fragment>
            );
          })}
        </ItemContainer>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 16px 0px;
  /* background: var(--gray-scale-white, #fff); */
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.15);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  padding: 0px 12px;
  span {
    display: flex;
    padding: 6px 0px;
    border-radius: 8px;
    justify-content: center;
    width: 100%;
    background: var(--gray-scale-g-0, #f3f6f8);
    font-size: ${({ titleFontSize }) =>
      titleFontSize ? titleFontSize : "12px"};
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 12px;
`;
const ItemBox = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
  label {
    font-size: ${({ labelFontSize }) =>
      labelFontSize ? labelFontSize : "12px"};
  }
`;
export default CommonRadioBox;
