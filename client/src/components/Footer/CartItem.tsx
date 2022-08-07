import styled from "styled-components";

interface CartInterface {
  id: number;
  name: string;
  price: number;
}

interface PropsInterface {
  cartItem: CartInterface;
}

export default function CartItem({ cartItem }: PropsInterface) {
  return <CartItemWrapper>{cartItem.name}</CartItemWrapper>;
}

const CartItemWrapper = styled.div`
  width: 75px;
  height: 75px;
  background-color: purple;

  display: flex;
  justify-content: center;
  align-items: center;
`;
