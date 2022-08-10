export function displayPrice(price: string | number): string {
  return price.toLocaleString("ko-KR", { maximumFractionDigits: 1 });
}
