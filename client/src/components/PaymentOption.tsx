import { useState } from "react";
import { useCartState } from "../contexts/CartContext";
import usePaymentOptionList from "../hooks/usePaymentOptionList";
import PaymentProcessing from "./PaymentProcessing";
import PaymentCash from "./PaymentCash";
import { CurrentPaymentOption, Order } from "../types";
import styled from "styled-components";

import payBaemin from "../assets/images/배민페이.png";
import payCard from "../assets/images/신용카드.png";
import payCoin from "../assets/images/페이코인.png";
import payCash from "../assets/images/현금.png";
import { SPECIAL_PAYMENT_OPTION } from "../constants";
import Loading from "./common/Loading";
import Error from "./common/Error";
const PAY_IMAGE = [payCash, payCard, payBaemin, payCoin];

export default function PaymentOption() {
  const { data: paymentOptions, loading, error } = usePaymentOptionList();
  const [isOpenPaymentProcess, setIsOpenPaymentProcess] = useState(false);
  const [isCashPayment, setIsCashPayment] = useState(false);
  const [orderData, setOrderData] = useState<Order | null>(null);
  const cartList = useCartState();
  const onClickPayment = (paymentOption: string, payment: number) => {
    setOrderData({
      payment,
      totalAmount: totalAmount(),
      products: product(),
    });
    if (paymentOption === SPECIAL_PAYMENT_OPTION) setIsCashPayment(true);
    setIsOpenPaymentProcess(true);
  };

  const product = () => {
    return cartList.map(({ product, quantity, option }) => ({
      id: product.id,
      quantity,
      options: [option.size, option.temperature],
    }));
  };

  const totalAmount = () => {
    return cartList.reduce((acc, { option, product, quantity }): number => {
      return acc + (option.extraCharge + +product.price) * quantity;
    }, 0);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!paymentOptions) return <div>직원에게 문의하세요!</div>;

  const CUR_PAYMENT_OPTION: CurrentPaymentOption = "기타";
  return (
    <>
      {isOpenPaymentProcess ? (
        isCashPayment ? (
          <PaymentCash orderData={orderData} />
        ) : (
          <PaymentProcessing
            orderData={orderData}
            type={CUR_PAYMENT_OPTION}
            change={0}
          />
        )
      ) : (
        <PaymentList>
          {paymentOptions.map(({ id, name }) => (
            <PaymentItem key={id}>
              <Button onClick={() => onClickPayment(name, id)}>
                <Img src={PAY_IMAGE[id]} />
                <Title>{name}</Title>
              </Button>
            </PaymentItem>
          ))}
        </PaymentList>
      )}
    </>
  );
}
const PaymentList = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const PaymentItem = styled.li`
  width: 220px;
  height: 270px;
`;

const Button = styled.button`
  background-color: inherit;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
    padding-left: 5px;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.p`
  font-size: 20px;
`;
