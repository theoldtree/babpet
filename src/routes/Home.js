import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Company from "./Company";
import Product from "./Product";

const TabNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 10px;
  }
`;

const TabLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &.activeclassname {
    background-color: #ccc;
  }
`;

export default function Home() {
  return (
    <div>
      <TabNav>
        <ul>
          <li>
            <TabLink to="/company" activeclassname="active">
              회사소개
            </TabLink>
          </li>
          <li>
            <TabLink to="/product" activeclassname="active">
              제품소개
            </TabLink>
          </li>
        </ul>
      </TabNav>

      <Routes>
        <Route path="/company" element={<Company />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}
