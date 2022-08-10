import styled from "styled-components";
import { useCartDispatch } from "../../contexts/CartContext";
import { Cart } from "../../types";
import { displayPrice } from "../../utils";
import button_add from "../../assets/images/button_add.svg";
import button_minus from "../../assets/images/button_minus.svg";
import button_x from "../../assets/images/button_x.svg";

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
  return (
    <CartItemWrapper>
      <Title>
        <span>{name}</span>
        <Options>
          {size} | {temperature}
        </Options>
      </Title>
      <QuantityWrapper>
        <Button>
          <Img src={button_minus} alt="빼기" />
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button>
          <Img src={button_add} alt="더하기" />
        </Button>
      </QuantityWrapper>
      <Price>{displayPrice((+price + +extraCharge) * quantity)} 원</Price>
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
  flex-grow: 2;
  color: teal;
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

const Quantity = styled.p``;

const Options = styled.span`
  font-size: 12px;
`;
