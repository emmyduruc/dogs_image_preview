import React from "react";
import styled from "styled-components";
import { mobile } from "../assests/responsive";

const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-around;
  width: 100%;
  background-color: #a6ebc9;
  top: 0;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
`;
const Input = styled.input`
  color: black;
  width: 39em;
  height: 1.5rem;
  border-radius: 6px;
  ${mobile({ width: "90px" })}
`;

function NavBar() {
  return (
    <Container>
      <Logo>DOGGE</Logo>
      <Input placeholder="Search for dogs..." />
      <h5>Home</h5>
      <h5>Breeds</h5>
    </Container>
  );
}

export default NavBar;
