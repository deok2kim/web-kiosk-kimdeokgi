import styled from "styled-components";
import CartItem from "./CartItem";
import { useCartState } from "../../contexts/CartContext";

export default function CartList() {
  const cartList = useCartState();
  return (
    <CartListWrapper>
      {cartList.map((cartItem) => (
        <li key={cartItem.id}>
          <CartItem cartItem={cartItem} />
        </li>
      ))}
    </CartListWrapper>
  );
}

const CartListWrapper = styled.ul`
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 580px;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
