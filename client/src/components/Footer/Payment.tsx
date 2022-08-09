import { useState } from "react";
import styled from "styled-components";
import { useCartDispatch, useCartState } from "../../contexts/CartContext";
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

  const MODAL_TITLE = "결제 수단 선택";
  return (
    <PaymentWrapper>
      <Button color="teal" disabled={isCartEmpty()} onClick={onModalToggle}>
        결제
      </Button>
      <Button color="tomato" onClick={onCartClear} disabled={isCartEmpty()}>
        장바구니 삭제
      </Button>
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
