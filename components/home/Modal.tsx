import React from "react";
import styled from "styled-components";
import { Card, Modal } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
  img: string;
  show: boolean;
  onHide: () => void;
};
function ImageModal(Props: Props) {
  return (
    <Modal
      {...Props}
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
                  src={Props.img}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Card>
      <Button aria-labelledby="close modal" onClick={Props.onHide}>
        Close
      </Button>
    </Modal>
  );
}

export default ImageModal;
