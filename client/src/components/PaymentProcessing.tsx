import React from "react";
import useOrder from "../hooks/useOrder";
import { Order } from "../types";
import Receipt from "./Receipt";
import Loading from "./common/Loading";

interface paymentNoCashProps {
  orderData: Order;
  type: string;
  change: number;
}
function PaymentProcessing({ orderData, type, change }: paymentNoCashProps) {
  const { data, loading, error } = useOrder(orderData);

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;

  return <Receipt id={data.id} type={type} change={change} />;
}

export default PaymentProcessing;
