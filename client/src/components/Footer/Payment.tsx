import styled from "styled-components";

export default function Payment() {
  return (
    <PaymentWrapper>
      <Button color="teal">결제</Button>
      <Button color="tomato">취소</Button>
    </PaymentWrapper>
  );
}

const PaymentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 30px;
`;
