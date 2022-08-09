import styled from "styled-components";
import { useCartDispatch, useCartState } from "../../contexts/CartContext";

export default function Payment() {
  const cartList = useCartState();
  const dispatch = useCartDispatch();
  const onCartClear = () => {
    dispatch({
      type: "INIT",
    });
  };
  return (
    <PaymentWrapper>
      <Button color="teal">결제</Button>
      <Button color="tomato" onClick={onCartClear} disabled={!cartList.length}>
        장바구니 삭제
      </Button>
    </PaymentWrapper>
  );
}

const PaymentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 30px;
`;
