import styled, { css } from "styled-components";

interface ModalProps {
  isOkBtn: boolean;
  okBtnFunc: () => void;
  isCancelBtn: boolean;
  cancelBtnFunc: () => void;
  body: React.ReactNode;
}

export default function Modal({
  isOkBtn,
  okBtnFunc,
  isCancelBtn,
  cancelBtnFunc,
  body,
}: ModalProps) {
  return (
    <ModalBackground>
      <ModalContainer>
        <Body>{body}</Body>
        <Footer>
          {isCancelBtn && <CancelBtn onClick={cancelBtnFunc}>취소</CancelBtn>}
          {isOkBtn && <OkBtn onClick={okBtnFunc}>확인</OkBtn>}
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
}

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

const fullWidth = css`
  width: 100%;
`;

const Body = styled.div`
  ${fullWidth}
  display: flex;
  align-items: center;
`;
const Footer = styled.div`
  ${fullWidth}
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CancelBtn = styled.button`
  width: 35%;
  height: 70px;
  color: white;
  border-radius: 5px;
  font-size: 32px;
  background-color: tomato;
  border: none;
`;

const OkBtn = styled(CancelBtn)`
  width: 35%;
  height: 70px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 32px;
  border: none;
`;
