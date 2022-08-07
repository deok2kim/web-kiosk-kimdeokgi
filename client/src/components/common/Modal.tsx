import styled from "styled-components";

interface PropInterface {
  isOkBtn: boolean;
  isCancelBtn: boolean;
}

export default function Modal({ isOkBtn, isCancelBtn }: PropInterface) {
  return (
    <ModalBackground>
      <ModalContainer>
        <Header></Header>
        <Body></Body>
        <Footer>
          {isCancelBtn && <CancelBtn>취소</CancelBtn>}
          {isOkBtn && <OkBtn>확인</OkBtn>}
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
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 400px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 25px;

  padding: 20px;
`;

const Header = styled.div`
  width: 100%;
`;
const Body = styled(Header)`
  height: 300px;
`;
const Footer = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CancelBtn = styled.button`
  width: 40%;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: tomato;
`;

const OkBtn = styled(CancelBtn)`
  background-color: teal;
`;
