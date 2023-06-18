import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAdjust,
  faAirFreshener,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TabNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #263343;
  padding: 8px 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  a {
    text-decoration: none;
    color: white;
    padding: 0px 5px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  a {
    text-decoration: none;
    color: white;
    padding: 8px 12px;
  }
  li: hover {
    background-color: #d49466;
    border-radius: 4px;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  color: white;
  li {
    padding: 0px 12px;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    justify-content: center;
    width: 100%;
  }
`;

const HamburgIcon = styled(FontAwesomeIcon)`
  color: #d49466;
  font-size: 24px;
  position: absolute;
  right: 30px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div>
      <TabNav>
        <HamburgIcon icon={faBars} onClick={onClick} />
        <Logo>
          <FontAwesomeIcon icon={faCoffee} size="lg" color="#d49466" />
          <a href="">Babpet</a>
        </Logo>
        <Menu>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
        </Menu>
        <Links>
          <li>
            <FontAwesomeIcon icon={faAdjust} />
          </li>
          <li>
            <FontAwesomeIcon icon={faAirFreshener} />
          </li>
        </Links>
      </TabNav>
    </div>
  );
}
