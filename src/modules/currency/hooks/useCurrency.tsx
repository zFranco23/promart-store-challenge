import { useAppSelector } from '../../../hooks/store';

export const useCurrency = () => {
  const currency = useAppSelector((state) => state.currency.currency);
  return currency;
};
