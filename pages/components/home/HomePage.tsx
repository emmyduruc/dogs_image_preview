import React from "react";
import { Container, Card } from "react-bootstrap";
import ImagesHooks from "../hooks/imageHooks";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ImageModal from "./Modal";

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [img, setImg] = React.useState('');
  console.log(img, "our img");
  


  const [error, myImages] = ImagesHooks() as [unknown, string[]];
  return (
    <Container>
      {myImages &&
        myImages.map((image: string) => (
          <Card onClick={() => {
            setModalShow(true);
            setImg(image);
          }} key={image}>
            <Card.Img variant="top" src={image} />
            <Card.Title>Card Title</Card.Title>
          </Card>
        ))}
      <ImageModal
        img={img}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default HomePage;
