import React from "react";
import styled from "styled-components";

const CommonRadioBox = () => {
  return (
    <Wrap>
      <input type="radio" />
      <label htmlFor=""></label>
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
      <input type="radio" />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export default CommonRadioBox;
