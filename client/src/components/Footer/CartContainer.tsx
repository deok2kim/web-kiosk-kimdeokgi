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
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* flex-wrap: nowrap; */
  /* overflow-x: auto; */
`;
