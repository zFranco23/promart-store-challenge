import { createReducer } from '@reduxjs/toolkit';

import type { Currency } from '../../entities';

export type CurrencyState = {
  currency?: Currency;
};

const initialState: CurrencyState = {
  currency: { code: 'Sol Peruano', symbol: 'S/.' },
};

const shoppingCartReducer = createReducer(initialState, () => null);

export default shoppingCartReducer;
