import { useState } from "react";
import { useCartState } from "../contexts/CartContext";
import usePaymentOptionList from "../hooks/usePaymentOptionList";
import PaymentNoCash from "./PaymentNoCash";
import PaymentCash from "./PaymentCash";
import { Order } from "../types";

export default function PaymentOption() {
  const { data: paymentOptions, loading, error } = usePaymentOptionList();
  const [isOpenPaymentProcess, setIsOpenPaymentProcess] = useState(false);
  const [isCashPayment, setIsCashPayment] = useState(false);
  const [orderData, setOrderData] = useState<Order | null>(null);
  const cartList = useCartState();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!paymentOptions) return <div>직원에게 문의하세요!</div>;

  const onClickPayment = (paymentOption: string, payment: number) => {
    if (paymentOption === "현금") setIsCashPayment(true);
    setIsOpenPaymentProcess(true);
    setOrderData({
      payment,
      products: product(),
      totalAmount: totalAmount(),
    });
  };

  const product = () => {
    return cartList.map(({ product, quantity }) => ({
      id: product.id,
      quantity,
    }));
  };

  const totalAmount = () => {
    return (
      cartList.reduce((acc, { option, product, quantity }): number => {
        return acc + (option.extraCharge + +product.price) * quantity;
      }, 0) + ""
    );
  };

  return (
    <>
      <ul>
        {paymentOptions.map(({ id, name }) => (
          <li key={id}>
            <button onClick={() => onClickPayment(name, id)}>{name}</button>
          </li>
        ))}
      </ul>
      {isOpenPaymentProcess &&
        (isCashPayment ? (
          <PaymentCash />
        ) : (
          <PaymentNoCash orderData={orderData} />
        ))}
    </>
  );
}
