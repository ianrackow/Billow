import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LineItem = styled.div`
  height: 40px;
  font-family: 'Avenir';
  font-size: 26px;
  line-height: 40px;
  margin-top: 26px;
`

const SourceLogo = styled.img`
  width: 44px;
  margin-right: 4px;
  transform: translateY(2px);
`;

const OffsetButton = styled.div`
  margin: 30px auto 55px auto;
  width: 300px;
  height: 60px;
  border-radius: 500px;
  background-color: rgba(203, 231, 247, 0.4);
  font-family: 'Bebas Neue', cursive;
  font-size: 40px;
  line-height: 60px;

  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 12px 2px #2079ab;
  }
`;

export default function OrderDetails() {
  const history = useNavigate();
  return (
    <>
      <NavBar />
      <Container>
        <LineItem>
          <SourceLogo src="/images/doordash.png" />
          Order from Sweetgreen
        </LineItem>
        <LineItem>Miles Traveled</LineItem>
        <LineItem>
          <SourceLogo style={{ transform: 'translateY(4px)'}} src="/images/cloud.svg" />
          Carbon Emissions
        </LineItem>
        <OffsetButton onClick={() => history("/summary")}>
          Offset for $2
        </OffsetButton>
      </Container>
    </>
  )
}