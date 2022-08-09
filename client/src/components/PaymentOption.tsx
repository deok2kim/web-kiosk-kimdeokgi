import { useCartState } from "../contexts/CartContext";
import usePaymentOptionList from "../hooks/usePaymentOptionList";

export default function PaymentOption() {
  const { data: paymentOptions, loading, error } = usePaymentOptionList();
  const cartList = useCartState();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!paymentOptions) return <div>직원에게 문의하세요!</div>;

  const onClickPayment = (paymentOption: string) => {
    if (paymentOption !== "현금") {
      console.log("결제 완료");
      console.log(cartList);
    }
    // console.log(paymentOption);
  };

  return (
    <>
      <ul>
        {paymentOptions.map(({ id, name }) => (
          <li key={id}>
            <button onClick={() => onClickPayment(name)}>{name}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
