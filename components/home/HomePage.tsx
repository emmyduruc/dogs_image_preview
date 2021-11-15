import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageModal from "./Modal";
import styled from "styled-components";
import axios from "axios";
import Loader from "./Loader";
import { countAtom, imageAtom } from "../assests/assests";

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
  margin-left: 35%;
`;

const HomePage = () => {
  const [count, setCount] = useRecoilState(countAtom);
  console.log("counts", count);
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [images, setImages] = useRecoilState(imageAtom);
  // const [images, setImages] = useState<string[]>([]);

  console.log(images, "images");

  const fetchImages = async (num = 25) => {
    await axios
      .get<any>(
        `https://dog.ceo/api/breeds/image/random/${
          images.length === 0 ? 50 : num
        }`
      )
      .then((res) => {
        setImages([...images, ...res.data.message]);
        console.log("type", typeof count);
        const arr = [...count, ...new Array(res.data.message.length).fill(0)];
        setCount(arr);
      });
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
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
              <Card.Title>Your views: {count[index]}</Card.Title>
            </Card>
          ))}
        <ImageModal
          modalImage={modalImage}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;
