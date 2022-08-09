import styled from "styled-components";
import { Cart } from "../../types";

interface CartItemProps {
  cartItem: Cart;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const {
    product: { name, price, thumbnail_img },
    option: { size, temperature },
    quantity,
  } = cartItem;
  return (
    <>
      <CartItemWrapper>
        <p>{name}</p>
        <p>
          {size} | {temperature}
        </p>
      </CartItemWrapper>
    </>
  );
}

const CartItemWrapper = styled.div`
  width: 150px;
  height: 150px;
  background-color: purple;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px;
`;
