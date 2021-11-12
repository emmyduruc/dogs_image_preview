import React from "react";
import Image from "next/image";
import { Container, Card, Modal, Button } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ImageModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
          <React.Fragment>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
              <img src={props.img} alt="dog image" width={500} height={500} />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
      <Button onClick={props.onHide}>Close</Button>
    </Modal>
  );
}

export default ImageModal;


