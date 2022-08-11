import { CASH } from "../constants";
import { formatPrice } from "../utils/index";
import styled from "styled-components";
import 만원 from "../assets/images/만원.jpeg";
import 천원 from "../assets/images/천원.jpeg";
import 오백원 from "../assets/images/오백원.png";
import 백원 from "../assets/images/백원.png";
import { useState } from "react";
import { CurrentPaymentOption, Order } from "../types";
import PaymentProcessing from "./PaymentProcessing";

interface Cash {
  id: number;
  name: string;
  amount: number;
}

const cashImage = {
  만원,
  천원,
  오백원,
  백원,
};

interface paymentCashProps {
  orderData: Order;
}

export default function PaymentCash({ orderData }: paymentCashProps) {
  const [currentCash, setCurrentCash] = useState(0);
  const [isEnoughPay, setIsEnoughPay] = useState(false);
  const cashList: Cash[] = CASH;
  const onClick = (amount: number): void => {
    setCurrentCash((prev) => prev + amount);
    calcEnoughPay(amount) && setIsEnoughPay(true);
  };
  const { totalAmount } = orderData;
  const calcEnoughPay = (amount: number) => {
    return currentCash + amount >= totalAmount;
  };
  const CUR_PAYMENT_OPTION: CurrentPaymentOption = "현금";
  return (
    <>
      {isEnoughPay ? (
        <PaymentProcessing
          orderData={orderData}
          type={CUR_PAYMENT_OPTION}
          change={currentCash - totalAmount}
        />
      ) : (
        <PaymentCashWrapper>
          <CashList>
            {cashList.map(({ id, name, amount }) => (
              <CashItem key={id}>
                <Button onClick={() => onClick(amount)}>
                  <Img src={cashImage[name]} />
                  <Title>{amount}</Title>
                </Button>
              </CashItem>
            ))}
          </CashList>
          <p>결제 금액: {formatPrice(totalAmount)} 원</p>
          <p>투입 금액: {formatPrice(currentCash)} 원</p>
        </PaymentCashWrapper>
      )}
    </>
  );
}

const CashList = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const CashItem = styled.li``;

const Button = styled.button`
  background-color: inherit;

  width: 200px;
  height: 200px;
  border: none;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

  &:active {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    padding-left: 5px;
  }
`;

const Img = styled.img`
  /* width: 100px; */
  display: none;
  height: 100px;
`;

const Title = styled.p`
  font-size: 20px;
`;

const PaymentCashWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// const AmountWrapper =
