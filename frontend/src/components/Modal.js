import { useContext } from "react";
import styled from "styled-components";

import { Modal } from "react-bootstrap";
import { ModalContext } from "../context/Modal";
import Close from "../images/svgs/close";
import { white } from "../style/colors";
import loginImage from "../images/fondLogin.png";

const Container = styled.div`
  font-family: "Gilda Display";
  color: white;
  z-index: 100;
  border-radius: 5px;
  padding: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: start;
  justify-content: start;
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  cursor: pointer;
  padding: 9px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const ModalComponent = ({ children, opened, onHide }) => {
  const { visible, close } = useContext(ModalContext);

  return (
    <Modal show={opened || visible} onHide={onHide || close} centered>
      <Container
        style={{ background: `url(${loginImage}) no-repeat center/cover` }}
      >
        <CloseContainer onClick={onHide || close}>
          <Close fill={white} width="20px" height="20px" />
        </CloseContainer>
        {children}
      </Container>
    </Modal>
  );
};

export default ModalComponent;
