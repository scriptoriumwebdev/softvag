import { Data, SEO } from "./types";

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

export const generateSEOData = (data: Data): SEO | undefined | null => {
  if (!data || !data.attributes) throw new Error();
  const SeoData = data.attributes.SEO;
  return SeoData;
};

export const replaceWithWhiteSpaces = (data: string) => {
  return data.replace(/&nbsp;/g, "\u00A0");
};
