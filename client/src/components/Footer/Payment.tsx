import { useState } from "react";
import styled from "styled-components";
import { useCartDispatch, useCartState } from "../../contexts/CartContext";
import { formatPrice } from "../../utils";
import Modal from "../common/Modal";
import PaymentOption from "../PaymentOption";

export default function Payment() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const cartList = useCartState();
  const dispatch = useCartDispatch();

  const onCartClear = () => dispatch({ type: "INIT" });
  const isCartEmpty = () => !cartList.length;

  const onModalToggle = () => {
    setIsOpenModal(!isOpenModal);
  };

  const totalAmount = () => {
    return cartList.reduce((acc, { option, product, quantity }): number => {
      return acc + (option.extraCharge + +product.price) * quantity;
    }, 0);
  };

  const countProduct = () => {
    return cartList.reduce((acc, { quantity }) => {
      return acc + quantity;
    }, 0);
  };

  return (
    <PaymentWrapper>
      <AmountWrapper>
        <Title>총 {countProduct()}개 결제 금액</Title>
        <TotalAmount>{formatPrice(totalAmount())}원</TotalAmount>
      </AmountWrapper>
      <DeleteBtn onClick={onCartClear} disabled={isCartEmpty()}>
        장바구니 비우기
      </DeleteBtn>
      <PaymentBtn disabled={isCartEmpty()} onClick={onModalToggle}>
        결제
      </PaymentBtn>
      {isOpenModal && (
        <Modal
          isOkBtn={false}
          isCancelBtn
          okBtnTitle=""
          cancelBtnTitle="뒤로가기"
          cancelBtnFunc={onModalToggle}
          okBtnFunc={() => {}}
          body={<PaymentOption />}
        />
      )}
    </PaymentWrapper>
  );
}

const PaymentWrapper = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
`;

const DeleteBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: inherit;
  color: ${(props) => props.theme.label};
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.label};

  box-shadow: ${(props) => props.theme.boxShadow.default};
  :disabled {
    background-color: #efcfcf;
  }
  &:enabled:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
`;

const PaymentBtn = styled.button`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border-radius: 5px;
  font-size: 32px;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  :disabled {
    background-color: ${(props) => props.theme.label};
  }
  &:enabled:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
`;

const Title = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 12px;
`;

const TotalAmount = styled.p`
  font-size: 24px;
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: start;
`;
