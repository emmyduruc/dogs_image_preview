import React from "react";
import {  Container, Card, } from "react-bootstrap";
import ImagesHooks from "../hooks/imageHooks";

const HomePage = () => {
  const [error, myImages] = ImagesHooks() as [unknown, string[]];
  return (
    <Container>
      {myImages &&
        myImages.map((image: string) => (
          <Card key={image}>
            <Card.Img variant="top" src={image} />
            <Card.Title>Card Title</Card.Title>
          </Card>
        ))}
    </Container>
  );
};

export default HomePage;
