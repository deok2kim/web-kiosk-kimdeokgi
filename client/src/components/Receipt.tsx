import styled from "styled-components";
import { SPECIAL_PAYMENT_OPTION } from "../constants";
import useReceipt from "../hooks/useReceipt";
import { formatPrice } from "../utils";

interface ReceiptProps {
  id: number;
  type: string;
  change: number;
}

export default function Receipt({ id, type, change }: ReceiptProps) {
  const { data, loading, error } = useReceipt(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const hasAdditionalInfo = () => {
    return type === SPECIAL_PAYMENT_OPTION;
  };

  return (
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
        <p>{data?.created_at}</p>
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
              {product.price +
                productOptions.reduce((acc, { extraCharge }): number => {
                  return acc + extraCharge;
                }, 0)}
            </Price>
            <Quantity>{quantity}</Quantity>
            <Price>
              {+(
                product.price +
                productOptions.reduce((acc, { extraCharge }): number => {
                  return acc + extraCharge;
                }, 0)
              ) * +quantity}
            </Price>
          </ProductWrapper>
        ))}
      </ProductListWrapper>
      <Dash />
      <SpaceBetweenWrapper>
        <p>결제금액</p>
        <p>{formatPrice(data?.totalAmount ? data.totalAmount : 0)} 원</p>
      </SpaceBetweenWrapper>
      <Dash />
      {hasAdditionalInfo() && (
        <SpaceBetweenWrapper>
          <p>거스름돈</p>
          <p>{formatPrice(change)} 원</p>
        </SpaceBetweenWrapper>
      )}
    </ReceiptWrapper>
  );
}

const ReceiptWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 50px;
`;

const StoreTitle = styled.p`
  font-size: 40px;
`;
const PaymentOption = styled.p`
  font-size: 30px;
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
  flex-grow: 1;
`;

const Quantity = styled.p`
  flex-grow: 2;
`;
