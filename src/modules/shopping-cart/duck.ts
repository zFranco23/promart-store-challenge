import { createReducer, createAction } from "@reduxjs/toolkit";

import { initShoppingCart, saveShoppingCart } from "./utils";

import type { ShoppingCartItem } from "../../entities/shopping-cart";

export type ShoppingCartState = {
  items: ShoppingCartItem[];
};

const initialState: ShoppingCartState = {
  items: initShoppingCart(),
};

//Actions
export const actions = {
  addItemToCart: createAction<ShoppingCartItem>("AddItemToCart"),
  removeItemCart: createAction<number>("RemoveItemCart"),
};

const shoppingCartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addItemToCart, (state: ShoppingCartState, action) => {
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
      saveShoppingCart(state.items);
    })
    .addCase(actions.removeItemCart, (state: ShoppingCartState, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((el) => el.id != itemId);
      saveShoppingCart(state.items);
    });
});

export default shoppingCartReducer;
