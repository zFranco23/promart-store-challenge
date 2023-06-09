import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { removeLocalStorageKey, saveLocalStorageKey } from '../../utils/storage';
import httpClient from '../../http/http';

export const AUTH_LOCAL_STORAGE_KEY = 'P_U_TOKEN';

export type AuthState = {
  isAuthenticating?: boolean;
  authError?: string;
  isLoggedIn?: boolean;
};

const initialState: AuthState = {};

// Thunks
export const login = createAsyncThunk('LoginUser', async (body: { [key: string]: string }) => {
  const { data } = await httpClient.post('/auth/login', body);
  return data;
});

export const getSession = createAsyncThunk('GetUserSession', async (token: string) => {
  //Implement get session logic.
  if (token) return { token: token };
  else throw new Error('Unauthorized');
});

//actions
export const actions = {
  logout: createAction('LogoutUser'),
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    //Login User
    .addCase(login.pending, (state: AuthState) => {
      state.isAuthenticating = true;
      state.authError = undefined;
    })
    .addCase(login.fulfilled, (state: AuthState, action) => {
      state.isAuthenticating = false;
      if (action.payload.token) {
        saveLocalStorageKey(AUTH_LOCAL_STORAGE_KEY, action.payload.token);
        state.isLoggedIn = true;
      }
    })
    .addCase(login.rejected, (state: AuthState) => {
      state.isAuthenticating = false;
      state.authError = 'Credenciales incorrectas.';
    })
    //logout
    .addCase(actions.logout, (state: AuthState) => {
      state.isLoggedIn = false;
      removeLocalStorageKey(AUTH_LOCAL_STORAGE_KEY);
    })
    //Get session
    .addCase(getSession.pending, (state: AuthState) => {
      state.isAuthenticating = true;
      state.authError = undefined;
    })
    .addCase(getSession.fulfilled, (state: AuthState, action) => {
      state.isAuthenticating = false;
      if (action.payload.token) {
        saveLocalStorageKey(AUTH_LOCAL_STORAGE_KEY, action.payload.token);
        state.isLoggedIn = true;
      }
    })
    .addCase(getSession.rejected, (state: AuthState) => {
      state.isAuthenticating = false;
    });
});

export default authReducer;
