export const priceFormatter = (price: number | string, currency: string): string => {
  return `${currency ? currency + ' ' : ''}${price}`;
};
