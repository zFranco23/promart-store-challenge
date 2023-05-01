import authReducer, { AuthState } from './auth/duck'
import productsReducer, { ProductsState } from './products/duck'
import shoppingCartReducer, { ShoppingCartState } from './shopping-cart/duck'
import homeReducer, { HomeState } from './home/duck'

//Modules imports/exports centralized here.
export interface RootState {
  auth: AuthState
  products: ProductsState
  shoppingCart: ShoppingCartState
  home: HomeState
}

export const rootReducer = {
  auth: authReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  home: homeReducer,
}
