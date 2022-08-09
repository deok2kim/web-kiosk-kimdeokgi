import styled, { css } from "styled-components";
import useOrder from "../hooks/useOrder";
import { Order } from "../types";

interface paymentNoCashProps {
  orderData: Order | null;
}
export default function PaymentNoCash({ orderData }: paymentNoCashProps) {
  const { data, loading, error } = useOrder(orderData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <ModalBackground>
      <ModalContainer>
        <h1>PaymentNoCash</h1>
      </ModalContainer>
    </ModalBackground>
  );
}

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
  width: 350px;
  height: 400px;
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 25px;

  padding: 20px;
`;