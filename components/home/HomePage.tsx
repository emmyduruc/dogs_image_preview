import React from "react";
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageModal from "./Modal";
import axios from "axios";
import Loader from "./Loader";
import { countAtom, imageQuery } from "../assests/assests";

const HomePage = () => {
  const [count, setCount] = useRecoilState(countAtom);
  console.log("counts", count);

  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const [images, setImages] = useState<string[]>([]);
  console.log(images, "images");
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 50) => {
    axios
      .get<any>(`https://dog.ceo/api/breeds/image/random/${count}`)
      .then((res) => {
        setImages([...images, ...res.data.message]);
      });
  };
  return (
    <Container>
      {images &&
        images.map((image: string, index: number) => (
          <Card
            onClick={() => {
              setModalShow(true);
              setModalImage(image);
              const newArray = [...count];
              newArray[index] += 1;
              setCount(newArray);
            }}
            key={image}
          >
            <Card.Img variant="top" src={image} />
            <Card.Title>Card Title: {count[index]}</Card.Title>
          </Card>
        ))}
      <ImageModal
        modalImage={modalImage}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default HomePage;
