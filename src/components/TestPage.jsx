import React from "react";
import styled from "styled-components";

const TestPage = ({ Page }) => {
  return (
    <Wrap>
      <Container>
        <Page />
      </Container>
    </Wrap>
  );
};

export default TestPage;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  min-width: 1280px;
  height: 100%;
  border: 1px solid red;
`;
