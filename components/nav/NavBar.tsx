import React from "react";
import styled from "styled-components";
import {
  Navbar,
  FormControl,
  Nav,
  Form,
  NavDropdown,
} from "react-bootstrap";


const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-around;
  width: 100%;
  background-color: #A6EBC9;
  top: 0;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
`;
const CenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;
const Input = styled.input`
  color: black;
  width: 39em;
  height: 1.5rem;
  border-radius: 6px;
`;

const Span = styled.span`
 color: red;

`;
const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;
function NavBar() {
  return (
    // <Navbar bg="light" expand="lg">
    <Container>
      <Logo>DOGGE</Logo>

      <CenterContainer>
        <Input placeholder="Search for dogs..." />
        {/* <Search /> */}
      </CenterContainer>
      <div>
        <span>Home</span>
        {/* <HomeIcon /> */}
      </div>
      <div>
        <span>timeline</span>
        {/* <Timeline /> */}
      </div>
    </Container>
  );
}

export default NavBar;
