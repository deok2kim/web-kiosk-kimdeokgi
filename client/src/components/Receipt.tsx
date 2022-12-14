import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SPECIAL_PAYMENT_OPTION } from "../constants";
import useReceipt from "../hooks/useReceipt";
import { formatDateTime, formatPrice } from "../utils";
import Error from "./common/Error";
import Loading from "./common/Loading";

interface ReceiptProps {
  id: number;
  type: string;
  change: number;
}

const TIME_LIMIT = 7;

export default function Receipt({ id, type, change }: ReceiptProps) {
  const { data, loading, error } = useReceipt(id);
  const [displayCount, setDisplayCount] = useState(TIME_LIMIT - 1);
  const countdown = useRef(TIME_LIMIT);

  const autoClose = (timer: number) => {
    clearInterval(timer);
    window.location.href = "/";
  };

  useEffect(() => {
    let timer: number;
    if (data) {
      timer = window.setInterval(() => {
        countdown.current -= 1;
        setDisplayCount(countdown.current - 1);
        if (countdown.current === 1) autoClose(timer);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });

  if (loading || !data) return <Loading />;
  if (error) return <Error />;
  const hasAdditionalInfo = () => {
    return type === SPECIAL_PAYMENT_OPTION;
  };

  return (
    <Container>
      <ReceiptWrapper>
        <StoreTitle>BAEDAL.KOMM</StoreTitle>
        <PaymentOption>{data?.payment.name}</PaymentOption>
        <SpaceBetweenWrapper>
          <p>루터회관점</p>
          <p>잠실</p>
        </SpaceBetweenWrapper>
        <SpaceBetweenWrapper>
          <p>대표: 김덕기</p>
          <p>010-8477-8981</p>
        </SpaceBetweenWrapper>
        <SpaceBetweenWrapper>
          <p>POS-NO.17</p>
          <p>{formatDateTime(data?.created_at)}</p>
        </SpaceBetweenWrapper>
        <Dash />
        <ProductListWrapper>
          {data?.orders.map(({ product, quantity, productOptions }, index) => (
            <ProductWrapper key={index}>
              <Title>{product.name}</Title>
              <Options>
                {productOptions.map(({ name }) => name).join(" . ")}
              </Options>
              <Price>
                {formatPrice(
                  product.price +
                    productOptions.reduce((acc, { extraCharge }): number => {
                      return acc + extraCharge;
                    }, 0)
                )}
              </Price>
              <Quantity>{quantity}</Quantity>
              <TotalPrice>
                {formatPrice(
                  +(
                    product.price +
                    productOptions.reduce((acc, { extraCharge }): number => {
                      return acc + extraCharge;
                    }, 0)
                  ) * +quantity
                )}
              </TotalPrice>
            </ProductWrapper>
          ))}
        </ProductListWrapper>
        <Dash />
        <SpaceBetweenWrapper>
          <p>결제금액</p>
          <p>{formatPrice(data?.totalAmount)} 원</p>
        </SpaceBetweenWrapper>
        <Dash />
        {hasAdditionalInfo() && (
          <SpaceBetweenWrapper>
            <p>거스름돈</p>
            <p>{formatPrice(change)} 원</p>
          </SpaceBetweenWrapper>
        )}
      </ReceiptWrapper>
      <p>{displayCount}초 뒤에 종료됩니다.</p>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ReceiptWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 600px;
  padding: 50px;
  overflow: auto;
`;

const StoreTitle = styled.p`
  font-size: 40px;
`;
const PaymentOption = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
`;

const SpaceBetweenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dash = styled.hr`
  border: dashed 2px black;
  width: 100%;
`;

const ProductListWrapper = styled.ul`
  width: 100%;
`;

const ProductWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 3px;
`;

const Title = styled.p`
  flex-grow: 10;
  width: 130px;
`;

const Options = styled.span`
  flex-grow: 4;
  font-size: 12px;
  width: 40px;
`;

const Price = styled.p`
  width: 69px;
`;

const TotalPrice = styled.p`
  width: 70px;
  text-align: end;
`;

const Quantity = styled.p`
  width: 10px;
  text-align: center;
`;
