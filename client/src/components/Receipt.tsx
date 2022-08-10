import useReceipt from "../hooks/useReceipt";

interface ReceiptProps {
  id: number;
}

export default function Receipt({ id }: ReceiptProps) {
  const { data, loading, error } = useReceipt(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <h1>영수증</h1>
      <p>오더넘버: {data?.created_at}</p>
      <p>결제수단: {data?.payment.name}</p>
      <p>총 결제금액: {data?.totalAmount}원</p>
      <ul>
        {data?.orders.map((order, index) => (
          <li key={index}>
            <p>{order.product.name}</p>
            <p>{order.product.price}원</p>
            <p>수량: {order.quantity}</p>
            <p>{order.productOptions.map(({ name }) => name).join(", ")}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}
