import styled from "styled-components";
import CartList from "./CartList";
import Payment from "./Payment";

export default function CartContainer() {
  return (
    <Container>
      <CartList />
      <Payment />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  margin: 20px auto;
`;
