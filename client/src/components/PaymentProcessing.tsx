import React from "react";
import useOrder from "../hooks/useOrder";
import { Order } from "../types";
import Receipt from "./Receipt";
import Loading from "./common/Loading";
import Modal from "./common/Modal";

interface paymentNoCashProps {
  orderData: Order;
  type: string;
  change: number;
}
function PaymentProcessing({ orderData, type, change }: paymentNoCashProps) {
  const { data, loading, error } = useOrder(orderData);

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;

  const moveToMain = () => {
    window.location.href = "/";
  };

  return (
    <Modal
      isOkBtn={false}
      isCancelBtn
      okBtnFunc={() => {}}
      cancelBtnFunc={moveToMain}
      body={<Receipt id={data.id} type={type} change={change} />}
    />
  );
}

export default PaymentProcessing;
