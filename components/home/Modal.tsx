import React from "react";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import { Card, Modal } from "react-bootstrap";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Clicks = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.div`
  background-color: #a6ebc9;
  padding: 1rem;
  text-align: center;
  border: 0.1rem solid black;
`;

function ImageModal(props: any) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Card>
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
            <React.Fragment>
              <Clicks className="tools">
                <Button onClick={() => zoomIn()}>zoom in</Button>
                <Button onClick={() => zoomOut()}>zoom out</Button>
                <Button onClick={() => resetTransform()}>x</Button>
              </Clicks>
              <TransformComponent>
                <Card.Img
                  variant="top"
                  style={{ width: "100%" }}
                  src={props.modalImage}
                />
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </Card>
      <Button onClick={props.onHide}>Close</Button>
    </Modal>
  );
}

export default ImageModal;
