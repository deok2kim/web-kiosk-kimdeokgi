import { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

interface CartInterface {
  id: number;
  name: string;
  price: number;
}

export default function CartList() {
  const [cartList] = useState<CartInterface[]>([
    {
      id: 1,
      name: "초코라떼",
      price: 5000,
    },
    {
      id: 2,
      name: "바닐라라떼",
      price: 6000,
    },
    {
      id: 3,
      name: "아이스티",
      price: 4000,
    },
    {
      id: 3,
      name: "아이스티",
      price: 4000,
    },
    {
      id: 3,
      name: "아이스티",
      price: 4000,
    },
    {
      id: 3,
      name: "아이스티",
      price: 4000,
    },
    {
      id: 3,
      name: "아이스티",
      price: 4000,
    },
  ]);
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
