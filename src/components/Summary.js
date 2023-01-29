import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Header = styled.div`
  font-family: "Avenir";
  font-size: 26px;
  margin: 15px 15px 20px 15px;
`;

const NatureSplash = styled.img`
  width: 55%;
`;

export default function Summary() {
  const totalEmissions = localStorage.getItem("totalEmissions");

  return (
    <>
      <NavBar />
      <Container>
        <NatureSplash src="/images/nature-undraw.svg" />
        <Header>
          You've offset&nbsp;
          <span style={{ color: "#2079ab", fontWeight: 700 }}>{totalEmissions}</span>
          &nbsp;pounds of CO2 on Billow 🥳
        </Header>
      </Container>
    </>
  );
}
