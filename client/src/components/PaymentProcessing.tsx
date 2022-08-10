import React from "react";
import styled from "styled-components";
import useOrder from "../hooks/useOrder";
import { Order } from "../types";
import Receipt from "./Receipt";

interface paymentNoCashProps {
  orderData: Order;
  type: string;
  change: number;
}
function PaymentProcessing({ orderData, type, change }: paymentNoCashProps) {
  const { data, loading, error } = useOrder(orderData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <ModalBackground>
      <ModalContainer>
        <Receipt id={data.id} type={type} change={change} />
      </ModalContainer>
    </ModalBackground>
  );
}

export default PaymentProcessing;

const ModalBackground = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 800px;
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 25px;

  padding: 20px;
`;
