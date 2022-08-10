import { useState } from "react";
import styled from "styled-components";
import { useCartDispatch, useCartState } from "../../contexts/CartContext";
import { displayPrice } from "../../utils";
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

  const MODAL_TITLE = "결제 수단 선택";
  return (
    <PaymentWrapper>
      <AmountWrapper>
        <Title>총 {countProduct()}개 결제 금액</Title>
        <TotalAmount>{displayPrice(totalAmount())}원</TotalAmount>
      </AmountWrapper>
      <DeleteAllBtn
        color="tomato"
        onClick={onCartClear}
        disabled={isCartEmpty()}
      >
        장바구니 비우기
      </DeleteAllBtn>
      <PaymentBtn color="teal" disabled={isCartEmpty()} onClick={onModalToggle}>
        결제
      </PaymentBtn>
      {isOpenModal && (
        <Modal
          isOkBtn={false}
          isCancelBtn
          cancelBtnFunc={onModalToggle}
          okBtnFunc={() => {}}
          body={<PaymentOption />}
          header={MODAL_TITLE}
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

const DeleteAllBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: inherit;
  color: gray;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid gray;
`;

const PaymentBtn = styled.button`
  width: 100%;
  height: 80px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 32px;
`;

const Title = styled.p`
  color: teal;
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
