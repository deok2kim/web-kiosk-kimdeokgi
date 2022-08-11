import { CASH } from "../constants";
import { formatPrice } from "../utils/index";
import styled from "styled-components";
import manwon from "../assets/images/만원.jpeg";
import cheonwon from "../assets/images/천원.jpeg";
import ocheonwon from "../assets/images/오천원.jpeg";
import { useState } from "react";
import { CurrentPaymentOption, Order } from "../types";
import PaymentProcessing from "./PaymentProcessing";

interface Cash {
  id: number;
  name: string;
  amount: number;
}
interface paymentCashProps {
  orderData: Order | null;
}

const CASH_IMAGE = [cheonwon, ocheonwon, manwon];
export default function PaymentCash({ orderData }: paymentCashProps) {
  const [currentCash, setCurrentCash] = useState(0);
  const [isEnoughPay, setIsEnoughPay] = useState(false);
  const cashList: Cash[] = CASH;
  const onClick = (amount: number): void => {
    setCurrentCash((prev) => prev + amount);
    calcEnoughPay(amount) && setIsEnoughPay(true);
  };
  const calcEnoughPay = (amount: number) => {
    return currentCash + amount >= (!!orderData && orderData?.totalAmount);
  };
  const CUR_PAYMENT_OPTION: CurrentPaymentOption = "현금";
  return (
    <>
      {isEnoughPay ? (
        <PaymentProcessing
          orderData={orderData}
          type={CUR_PAYMENT_OPTION}
          change={currentCash - +(!!orderData && orderData?.totalAmount)}
        />
      ) : (
        <PaymentCashWrapper>
          <CashList>
            {cashList.map(({ id, name, amount }) => (
              <CashItem key={id}>
                <Button onClick={() => onClick(amount)}>
                  <Img src={CASH_IMAGE[id]} />
                </Button>
              </CashItem>
            ))}
          </CashList>
          <AmountWrapper>
            <p>결제 금액: {formatPrice(orderData?.totalAmount)} 원</p>
            <p>투입 금액: {formatPrice(currentCash)} 원</p>
          </AmountWrapper>
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

  border: none;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
    padding-left: 5px;
  }
`;

const Img = styled.img`
  height: 100px;
`;

const PaymentCashWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const AmountWrapper = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 30px;
`;
