import { getLocalStorageKey, saveLocalStorageKey } from '../../../utils/storage';

import type { ShoppingCartItem } from '../../../entities/shopping-cart';

const SC_KEY = 'CART';

export const initShoppingCart = () => {
  const sc = getLocalStorageKey(SC_KEY);
  return sc;
};

export const saveShoppingCart = (items: ShoppingCartItem[]) => saveLocalStorageKey(SC_KEY, items);
