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

  const onClickPayment = (paymentOption: string, payment: number) => {
    setOrderData({
      payment,
      totalAmount: totalAmount(),
      products: product(),
    });
    if (paymentOption === "현금") setIsCashPayment(true);
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
    return (
      cartList.reduce((acc, { option, product, quantity }): number => {
        return acc + (option.extraCharge + +product.price) * quantity;
      }, 0) + ""
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!paymentOptions) return <div>직원에게 문의하세요!</div>;

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
