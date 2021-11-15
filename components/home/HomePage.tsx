import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageModal from "./Modal";
import styled from "styled-components";
import axios from "axios";
import Loader from "./Loader";
import { countAtom, imageAtom, modalAtom } from "../recoils/atoms";

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
  margin-left: 35%;
`;

const HomePage = () => {
  const [count, setCount] = useRecoilState(countAtom);
  const [modalShow, setModalShow] = useState(false);
  const [img, setModalImg] = useRecoilState(modalAtom);
  const [images, setImages] = useRecoilState(imageAtom);

  const handleClick = (image: string, index: number) => {
    setModalShow(true);
    setModalImg(image);
    const newArray = [...count];
    newArray[index] += 1;
    setCount(newArray);
  };
  const fetchImages = async (num = 25) => {
    await axios
      .get<any>(
        `https://dog.ceo/api/breeds/image/random/${
          images.length === 0 ? 50 : num
        }`
      )
      .then((res) => {
        setImages([...images, ...res.data.message]);
        const arr = [...count, ...new Array(res.data.message.length).fill(0)];
        setCount(arr);
      });
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Container aria-labelledby="dogs image container">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        {images &&
          images.map((image: string, index: number) => (
            <Card
              aria-labelledby="dogs image card"
              style={{ margin: "10px", border: "none" }}
              onClick={() => {
                handleClick(image, index);
              }}
              key={uuidv4()}
            >
              <Card.Img
                aria-labelledby="dogs images"
                variant="top"
                src={image}
                alt="dogs images"
              />
              <Card.Title aria-labelledby="preview counts">
                Previews: <Badge bg="secondary">{count[index]}</Badge>
              </Card.Title>
            </Card>
          ))}
        <ImageModal
          img={img}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </InfiniteScroll>
    </Container>
  );
};

export default HomePage;
