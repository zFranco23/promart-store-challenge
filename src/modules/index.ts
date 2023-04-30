import authReducer, { AuthState } from "./auth/duck";
import productsReducer, { ProductsState } from "./products/duck";

//Modules imports/exports centralized here.
export interface RootState {
  auth: AuthState;
  products: ProductsState;
}

export const rootReducer = {
  auth: authReducer,
  products: productsReducer,
};
