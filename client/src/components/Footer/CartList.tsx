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
  height: 150px;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: scroll;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
