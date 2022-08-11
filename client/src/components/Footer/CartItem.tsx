import styled from "styled-components";
import { useCartDispatch } from "../../contexts/CartContext";
import { Cart } from "../../types";
import { formatPrice } from "../../utils";
import { PRODUCT_MAX, PRODUCT_MIN } from "../../constants";

import button_x from "../../assets/images/close.png";
import button_minus from "../../assets/images/minus.png";
import button_plus from "../../assets/images/plus.png";

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
        <Name>{name}</Name>
        <Options>
          {temperature}, {size}
        </Options>
      </Title>
      <QuantityWrapper>
        <Button onClick={onDecrease}>
          <Img src={button_minus} alt="빼기" />
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={onIncrease}>
          <Img src={button_plus} alt="더하기" />
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
const Name = styled.p`
  width: 250px;
`;

const Title = styled.div`
  width: 320px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Price = styled.p`
  width: 100px;
  color: ${(props) => props.theme.primary};
  text-align: right;
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Quantity = styled.p`
  text-align: center;
  width: 20px;
`;

const Options = styled.span`
  font-size: 12px;
  width: 20px;
`;
