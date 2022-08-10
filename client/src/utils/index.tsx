export function formatPrice(price: string | number): string {
  return price.toLocaleString("ko-KR", { maximumFractionDigits: 1 });
}
