import React from "react";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageModal from "../modal/Modal";
import Loader from "./Loader";
import { Card, Badge } from "react-bootstrap";
import { imageAtom, ImageObject, isCount, modalAtom } from "../recoils/atoms";
import { Container } from "./style";

type Result = {
    result: string[]
}
const HomePage = ({result}:Result) => {
  console.log("result", result);

  
  const imageCount = useRecoilValue(isCount);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [img, setModalImg] = useRecoilState(modalAtom);
  const [images, setImages] = useRecoilState(imageAtom);

  const handleClick = (image: ImageObject) => {
    setModalShow(true);
    setModalImg(image.url);
    const updatedCount = imageCount.map((imageItem) => {
      if (image.id === imageItem.id) {
        return { ...image, count: image.count + 1 };
      } else {
        return imageItem;
      }
    });
    setImages(updatedCount);
  };
  const fetchImages = async (num = 25) => {
    await axios
      .get(
        `https://dog.ceo/api/breeds/image/random/${
          images.length === 0 ? 50 : num
        }`
      )
      .then((res) => {
        const mappedArray = res.data.message.map((image: ImageObject) => {
          return {
            id: uuidv4(),
            url: image,
            count: 0,
          };
        });
        setImages([...images, ...mappedArray]);
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
          images.map((image: ImageObject) => (
            <Card
              aria-labelledby="dogs image card"
              style={{ margin: "10px", border: "none" }}
              onClick={() => {
                handleClick(image);
              }}
              key={uuidv4()}
            >
              <Card.Img
                aria-labelledby="dogs images"
                variant="top"
                src={image.url}
                alt="dogs images"
              />
              {image && (
                <Card.Title aria-labelledby="preview counts">
                  Previews: <Badge bg="secondary">{image.count}</Badge>
                </Card.Title>
              )}
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

type Post = {
  message: string[]
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random/50');
  const posts = await res.json();
  const result: Post[] = posts.data.message
  // console.log("result", result);
  return {
    props: {
      result,
    },
  };
};

export default HomePage;
