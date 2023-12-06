import React from "react";
import styled from "styled-components";
import Logo from "../asset/Logo.svg";
import { useState } from "react";
import { Children } from "react";
import TestPage from "./TestPage";
import { Outlet } from "react-router-dom";

const CommonHeader = () => {
  const options = [
    { label: "경기 리포트", value: "report" },
    { label: "공격 분석", value: "attack" },
    { label: "수비 분석", value: "defense" },
    { label: "영양 분석", value: "nutrition" },
  ];

  const [selected, setSelected] = useState("");
  const onClickHandler = (e, value) => {
    e.preventDefault();
    setSelected(value);
  };
  return (
    <Wrap>
      <MenuBarContainer>
        <div className="Logo">
          <img src={Logo} alt="소속" width={"100%"} height={"80px"} />
        </div>
        <div className="Item">
          {options?.map((i, index) => (
            <React.Fragment key={`${index}_${i.value}`}>
              <MenuBtn
                onClick={(e) => onClickHandler(e, i.value)}
                selected={selected === i.value}>
                {i.label}
              </MenuBtn>
            </React.Fragment>
          ))}
        </div>
      </MenuBarContainer>
      <ContentContainer>
        <HeaderBox></HeaderBox>
        <ContentBox>
          <Outlet />
        </ContentBox>
      </ContentContainer>
    </Wrap>
  );
};

export default CommonHeader;

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 144px;
  /* min-width: 144px; */
  z-index: 2;
  height: 100%;

  background: var(--theme-main-navy, #002b79);
  .Logo {
    padding: 32px;
  }
  .Item {
    height: 100%;
    padding-left: 16px;
  }
`;
const MenuBtn = styled.button`
  display: flex;
  width: 100%;
  border: none;
  height: 72px;
  justify-content: center;
  align-items: center;
  border-radius: 16px 0px 0px 16px;

  font-size: 16px;
  font-weight: 700;

  ${({ selected }) =>
    selected
      ? `background-color: white; color: var(--theme-main-navy, #002b79);`
      : `background: var(--theme-main-navy, #002b79); color: white;`}

  :hover {
    background-color: white;
    color: var(--theme-main-navy, #002b79);
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(100vw - 144px); */
  width: 100%;
  height: 100%;
`;

const HeaderBox = styled.div`
  display: flex;
  height: 64px;
  border-bottom: 2px solid var(--gray-scale-g-1, #e6e6e7);
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
`;
