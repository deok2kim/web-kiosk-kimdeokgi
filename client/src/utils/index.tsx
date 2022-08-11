export function formatPrice(price: string | number | undefined): string {
  if (price === undefined) return "0";
  return price.toLocaleString("ko-KR", { maximumFractionDigits: 1 });
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
