export function formatPrice(price: string | number | undefined): string {
  if (price === undefined) return "0";
  return price.toLocaleString("ko-KR", { maximumFractionDigits: 1 });
}

export function getRandomSecond(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

export function formatDateTime(date: string | undefined): string {
  if (date === undefined) return "DATE ERROR";
  return date.split("T").join(" ").split(".")[0];
}
