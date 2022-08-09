import styled from "styled-components";
import { useCartDispatch } from "../../contexts/CartContext";
import { Cart } from "../../types";

interface CartItemProps {
  cartItem: Cart;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useCartDispatch();
  const {
    id,
    product: { name, price, thumbnail_img },
    option: { size, temperature },
    quantity,
  } = cartItem;
  const onRemoveClick = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };
  return (
    <>
      <CartItemWrapper>
        <button onClick={onRemoveClick}>X</button>
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
