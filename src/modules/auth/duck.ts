import {  createReducer } from "@reduxjs/toolkit";

export interface AuthState {
  isLoading?: boolean;
}

const initialState: AuthState = {
  isLoading: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: AuthState) => {
    state.isLoading = false;
  });
});

export default authReducer;
