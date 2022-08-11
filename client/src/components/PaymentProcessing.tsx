import React from "react";
import useOrder from "../hooks/useOrder";
import { Order } from "../types";
import Receipt from "./Receipt";
import Loading from "./common/Loading";
import Modal from "./common/Modal";
import Error from "./common/Error";

interface paymentNoCashProps {
  orderData: Order | null;
  type: string;
  change: number;
}
function PaymentProcessing({ orderData, type, change }: paymentNoCashProps) {
  const { data, loading, error } = useOrder(orderData);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const moveToMain = () => {
    window.location.href = "/";
  };

  return (
    <Modal
      isOkBtn={false}
      isCancelBtn
      okBtnTitle=""
      cancelBtnTitle="닫기"
      okBtnFunc={() => {}}
      cancelBtnFunc={moveToMain}
      body={<Receipt id={data.id} type={type} change={change} />}
    />
  );
}

export default PaymentProcessing;
