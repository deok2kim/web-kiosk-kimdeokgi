import styled from "styled-components";

interface AlertProps {
  text: string;
  close: () => void;
}

export default function Alert({ text, close }: AlertProps) {
  return (
    <AlertBackground>
      <AlertContainer>
        <Text>{text}</Text>
        <Button onClick={close}>확인</Button>
      </AlertContainer>
    </AlertBackground>
  );
}

const AlertBackground = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;

const AlertContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 25px;
  padding: 30px;
`;

const Text = styled.p`
  font-size: 24px;
`;

const Button = styled.button`
  width: 35%;
  height: 70px;
  background-color: ${(props) => props.theme.error};
  color: white;
  border-radius: 5px;
  font-size: 32px;
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
  }
`;
