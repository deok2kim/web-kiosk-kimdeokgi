import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: 100px;
  width: 100px;
  border: 5px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
