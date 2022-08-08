import styled, { css } from "styled-components";

interface PropInterface {
  isOkBtn: boolean;
  isCancelBtn: boolean;
  body: React.ReactNode;
  header: string;
}

export default function Modal({
  isOkBtn,
  isCancelBtn,
  body,
  header,
}: PropInterface) {
  return (
    <ModalBackground>
      <ModalContainer>
        <Header>{header}</Header>
        <Body>{body}</Body>
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
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 25px;

  padding: 20px;
`;

const fullWidth = css`
  width: 100%;
`;

const Header = styled.div`
  ${fullWidth}
`;
const Body = styled.div`
  ${fullWidth}
  height: 300px;
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
  width: 40%;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: tomato;
`;

const OkBtn = styled(CancelBtn)`
  background-color: teal;
`;
