import styled from "styled-components";

function Error() {
  return (
    <AlertBackground>
      <AlertContainer>
        <Text>관리자에게 문의 부탁드립니다</Text>
      </AlertContainer>
    </AlertBackground>
  );
}

export default Error;

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
