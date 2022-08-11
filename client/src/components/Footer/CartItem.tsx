import styled from "styled-components";
import { useCartDispatch } from "../../contexts/CartContext";
import { Cart } from "../../types";
import { formatPrice } from "../../utils";
import button_add from "../../assets/images/button_add.svg";
import button_minus from "../../assets/images/button_minus.svg";
import button_x from "../../assets/images/button_x.svg";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { PRODUCT_MAX, PRODUCT_MIN } from "../../constants";

interface CartItemProps {
  cartItem: Cart;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const dispatch = useCartDispatch();
  const {
    id,
    product: { name, price },
    option: { size, temperature, extraCharge },
    quantity,
  } = cartItem;
  const onRemoveClick = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  const onIncrease = () => {
    console.log("추가", quantity, PRODUCT_MAX);
    if (quantity + 1 > PRODUCT_MAX) return;
    dispatch({ type: "UPDATE_QUANTITY", id, newQuantity: quantity + 1 });
  };
  const onDecrease = () => {
    if (quantity - 1 < PRODUCT_MIN) return;
    dispatch({ type: "UPDATE_QUANTITY", id, newQuantity: quantity - 1 });
  };

  return (
    <CartItemWrapper>
      <Title>
        <span>{name}</span>
        <Options>
          {size} | {temperature}
        </Options>
      </Title>
      <QuantityWrapper>
        <Button onClick={onDecrease}>
          <Img src={button_minus} alt="빼기" />
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={onIncrease}>
          <Img src={button_add} alt="더하기" />
        </Button>
      </QuantityWrapper>
      <Price>{formatPrice((+price + +extraCharge) * quantity)} 원</Price>
      <Button onClick={onRemoveClick}>
        <Img src={button_x} alt="제거" />
      </Button>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Title = styled.p`
  flex-grow: 15;
  width: 150px;
`;

const QuantityWrapper = styled.div`
  flex-grow: 5;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Price = styled.p`
  width: 80px;
  color: teal;
  text-align: center;
`;

const Button = styled.button`
  flex-grow: 1;
  background-color: inherit;
  border: none;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Quantity = styled.p`
  text-align: center;
`;

const Options = styled.span`
  font-size: 12px;
`;
