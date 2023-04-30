import { createAsyncThunk, createReducer, isAnyOf } from "@reduxjs/toolkit";
import httpClient from "../../http/http";
import listenerMiddleware from "../../store/middlewares/listener";
import { getSession, login } from "../auth/duck";

import type { Category, Product } from "../../entities";

export type ProductsState = {
  isFetchingProducts?: boolean;
  isFetchingCategories?: boolean;
  products?: Product[];
  categories?: Category[];
};

const initialState: ProductsState = {};

//Add reactive implementation with RTK
listenerMiddleware.startListening({
  matcher: isAnyOf(login.fulfilled, getSession.fulfilled),
  effect: async (_, listenerAPI) => {
    listenerAPI.dispatch(fetchProducts());
    listenerAPI.dispatch(fetchCategories());
  },
});

export const fetchProducts = createAsyncThunk("FetchProducts", async () => {
  const { data } = await httpClient.get<Product[]>("/products");
  return data;
});

export const fetchCategories = createAsyncThunk("FetchCategories", async () => {
  const { data } = await httpClient.get<Category[]>("/products/categories");
  return data;
});

const productsReducer = createReducer(initialState, (builder) => {
  builder
    //Products
    .addCase(fetchProducts.pending, (state: ProductsState) => {
      state.isFetchingProducts = true;
    })
    .addCase(fetchProducts.fulfilled, (state: ProductsState, action) => {
      state.isFetchingProducts = false;
      if (action.payload) {
        state.products = action.payload;
      }
    })
    .addCase(fetchProducts.rejected, (state: ProductsState) => {
      state.isFetchingProducts = false;
    })
    //Categories
    .addCase(fetchCategories.pending, (state: ProductsState) => {
      state.isFetchingCategories = true;
    })
    .addCase(fetchCategories.fulfilled, (state: ProductsState, action) => {
      state.isFetchingCategories = false;
      if (action.payload) {
        state.categories = action.payload;
      }
    })
    .addCase(fetchCategories.rejected, (state: ProductsState) => {
      state.isFetchingCategories = false;
    });
});

export default productsReducer;
