import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Organizations = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 8px 0;
`;

const Row = styled.div`
  display: flex;
`;

const Header = styled.div`
  font-family: "Avenir";
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;

const OrgLogo = styled.img`
  width: 70px;
  margin: 18px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

const OffsetButton = styled.div`
  margin: 10px auto 20px auto;
  width: 250px;
  height: 40px;
  border-radius: 500px;
  background-color: rgba(203, 231, 247, 0.4);
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  line-height: 40px;

  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 12px 2px #2079ab;
  }
`;

export default function Settings() {
  return (
    <>
      <NavBar />
      <SettingsContainer>
        <Header>Select charitable organization</Header>
        <Organizations>
          <Row>
            <OrgLogo src="/images/carbon180.png" />
            <OrgLogo src="/images/catf.png" />
          </Row>
          <Row>
            <OrgLogo src="/images/coolearth.png" />
            <OrgLogo src="/images/rf-ally.jpeg" />
          </Row>
        </Organizations>
        <a
          href="https://www.vox.com/future-perfect/2019/12/2/20976180/climate-change-best-charities-effective-philanthropy"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#2079ab" }}
        >
          Methodology
        </a>
        <OffsetButton>Connect Wallet</OffsetButton>
      </SettingsContainer>
    </>
  );
}
