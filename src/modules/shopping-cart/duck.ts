import { createReducer, createAction } from "@reduxjs/toolkit";

import type { ShoppingCartItem } from "../../entities/shopping-cart";

export type ShoppingCartState = {
  items: ShoppingCartItem[];
};

const initialState: ShoppingCartState = {
  items: [],
};

//Actions
export const actions = {
  addItemToCart: createAction<ShoppingCartItem>("AddItemToCart"),
};

const shoppingCartReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.addItemToCart, (state: ShoppingCartState, action) => {
    const itemToAdd = action.payload;
    const currentItems = state.items;
    const foundIndex = currentItems.findIndex(
      (item) => item.id == itemToAdd.id
    );
    //Taking advantage of immer (RTK)
    if (foundIndex === -1) {
      state.items.push(itemToAdd);
    } else {
      const cartItem = state.items[foundIndex];
      cartItem.quantity += itemToAdd.quantity;
      state.items[foundIndex] = cartItem;
    }
  });
});

export default shoppingCartReducer;
