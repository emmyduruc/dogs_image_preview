import React from "react";
import { Container, Logo, Input } from "./styles";

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
