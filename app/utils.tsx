export const formatCurrency = (price: number, currency: string) => {
  let format = "";
  if (currency === "PLN") format = "pl-PL";
  if (currency === "USD") format = "en-US";
  if (currency === "EUR") format = "de-DE";
  return new Intl.NumberFormat(format, {
    style: "currency",
    maximumFractionDigits: 0,
    currency: currency,
  }).format(price);
};
