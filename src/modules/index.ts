import authReducer, { AuthState } from './auth/duck';
import productsReducer, { ProductsState } from './products/duck';
import shoppingCartReducer, { ShoppingCartState } from './shopping-cart/duck';
import homeReducer, { HomeState } from './home/duck';
import currencyReducer, { CurrencyState } from './currency/duck';
import checkoutReducer, { CheckoutState } from './checkout/duck';

//Modules imports/exports centralized here.
export interface RootState {
  auth: AuthState;
  products: ProductsState;
  shoppingCart: ShoppingCartState;
  home: HomeState;
  currency: CurrencyState;
  checkout: CheckoutState;
}

export const rootReducer = {
  auth: authReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  home: homeReducer,
  currency: currencyReducer,
  checkout: checkoutReducer,
};
