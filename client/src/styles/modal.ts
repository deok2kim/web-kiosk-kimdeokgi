import styled from "styled-components";

const ModalBackground = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 800px;
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 25px;

  padding: 30px;
`;

export { ModalBackground, ModalContainer };
