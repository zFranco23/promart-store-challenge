import { useMemo } from 'react';
import { useAppSelector } from '../../../hooks/store';

const useShoppingCart = () => {
  const items = useAppSelector((state) => state.shoppingCart.items);

  const totalPrice = useMemo(() => {
    const total = items.reduce((acum, curr) => acum + curr.quantity * curr.price, 0);
    return total.toFixed(2);
  }, [items]);

  return { items, totalPrice };
};

export default useShoppingCart;
