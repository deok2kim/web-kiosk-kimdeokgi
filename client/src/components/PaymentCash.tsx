export default function PaymentCash() {
  const cashList: number[] = [100, 500, 1000, 10000];
  return (
    <>
      <h1>투입 금액 선택</h1>
      <ul>
        {cashList.map((amount, idx) => (
          <li key={idx}>
            <button>{amount}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
