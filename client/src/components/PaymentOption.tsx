import { useState } from "react";

interface PaymentOptionInterface {
  id: number;
  name: string;
}

export default function PaymentOption() {
  const [paymentOptions] = useState<PaymentOptionInterface[]>([
    {
      id: 1,
      name: "현금",
    },
    {
      id: 2,
      name: "신용카드",
    },
  ]);
  return (
    <>
      <h1>결제수단</h1>
      <ul>
        {paymentOptions.map(({ id, name }) => (
          <li key={id}>
            <button>{name}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
