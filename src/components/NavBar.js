import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  background-color: #cbe7f7;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  margin: auto;
`;

const Logo = styled.div`
  font-family: 'Avenir';
  font-size: 24px;
  font-weight: 500;
  padding: 6px 0;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 20px;
  margin-right: 4px;
  transform: translateY(2px);
`;

const GearIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;

export default function NavBar() {
  const history = useNavigate();
  return (
    <Header>
      <Logo onClick={() => history("/summary")}>
        <LogoIcon src="/images/logo192.png" />
        Billow
      </Logo>
      <GearIcon src="/images/gear-solid.svg" onClick={() => history("/settings")}/>
    </Header>
  )

}