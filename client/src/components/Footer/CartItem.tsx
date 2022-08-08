import styled from "styled-components";
import { Cart } from "../../types";

interface CartItemProps {
  cartItem: Cart;
}

export default function CartItem({ cartItem }: CartItemProps) {
  return <CartItemWrapper></CartItemWrapper>;
}

const CartItemWrapper = styled.div`
  width: 75px;
  height: 75px;
  background-color: purple;

  display: flex;
  justify-content: center;
  align-items: center;
`;
