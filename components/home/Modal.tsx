import React from "react";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import { Card, Modal } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { type } from "os";

const Clicks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;
const Button = styled.div`
  background-color: #a6ebc9;
  padding: 1rem;
  text-align: center;
  border: 0.1rem solid black;
`;
type Props = {
  image: string;
};

function ImageModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vertical-center"
      centered
    >
      <Card>
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <React.Fragment>
              <Clicks>
                <Button
                  aria-labelledby="zoom in button"
                  onClick={() => zoomIn()}
                >
                  zoom in
                </Button>
                <Button
                  aria-labelledby="zoom out button"
                  onClick={() => zoomOut()}
                >
                  zoom out
                </Button>
                <Button
                  aria-labelledby="reset zoom transform"
                  onClick={() => resetTransform()}
                >
                  x
                </Button>
              </Clicks>
              <TransformComponent>
                <Card.Img
                  aria-labelledby="modal image"
                  variant="top"
                  style={{ width: "100%" }}
                  src={props.img}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Card>
      <Button aria-labelledby="close modal" onClick={props.onHide}>
        Close
      </Button>
    </Modal>
  );
}

export default ImageModal;
