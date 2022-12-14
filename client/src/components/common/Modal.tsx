import styled, { css } from "styled-components";
import { ModalBackground, ModalContainer } from "../../styles/modal";

interface ModalProps {
  isOkBtn: boolean;
  okBtnFunc: () => void;
  isCancelBtn: boolean;
  cancelBtnFunc: () => void;
  okBtnTitle: string;
  cancelBtnTitle: string;
  body: React.ReactNode;
}

export default function Modal({
  isOkBtn,
  okBtnFunc,
  isCancelBtn,
  cancelBtnFunc,
  body,
  okBtnTitle,
  cancelBtnTitle,
}: ModalProps) {
  return (
    <ModalBackground>
      <ModalContainer>
        <Body>{body}</Body>
        <Footer>
          {isCancelBtn && (
            <CancelBtn onClick={cancelBtnFunc}>{cancelBtnTitle}</CancelBtn>
          )}
          {isOkBtn && <OkBtn onClick={okBtnFunc}>{okBtnTitle}</OkBtn>}
        </Footer>
      </ModalContainer>
    </ModalBackground>
  );
}

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
  background-color: ${(props) => props.theme.error};
  border: none;
    box-shadow: ${(props) => props.theme.boxShadow.default};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
`;

const OkBtn = styled(CancelBtn)`
  width: 35%;
  height: 70px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border-radius: 5px;
  font-size: 32px;
  border: none;
    box-shadow: ${(props) => props.theme.boxShadow.default};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
`;
