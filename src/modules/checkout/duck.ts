import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { ShoppingCartItem } from '../../entities';
import { cleanShoppingCart } from '../shopping-cart/utils';

export type CheckoutState = {
  isLoading?: boolean;
  checkoutSuccess?: boolean;
};

const initialState: CheckoutState = {};

export const orderCheckout = createAsyncThunk('OrderCheckout', async (body: ShoppingCartItem[]) => {
  //Send data to backend
  await new Promise((resolve) => {
    setTimeout(() => resolve(body), 3000);
  });
});

const checkoutReducer = createReducer(initialState, (builder) => {
  builder
    //Products
    .addCase(orderCheckout.pending, (state: CheckoutState) => {
      state.isLoading = true;
    })
    .addCase(orderCheckout.fulfilled, (state: CheckoutState) => {
      state.isLoading = false;
      state.checkoutSuccess = true;
      cleanShoppingCart();
    });
  // .addCase(orderCheckout.rejected, (state: CheckoutState) => {
  //   state.isLoading = false;
  // });
});

export default checkoutReducer;
