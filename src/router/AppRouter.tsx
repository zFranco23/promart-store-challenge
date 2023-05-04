import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../modules/home/pages/Home';
import Login from '../modules/auth/pages/Login';
import ShoppingCart from '../modules/shopping-cart/pages/ShoppingCart';
import Checkout from '../modules/checkout/pages/Checkout';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { AUTH_LOCAL_STORAGE_KEY, getSession } from '../modules/auth/duck';
import { getLocalStorageKey } from '../utils/storage';
import { useAppDispatch } from '../hooks/store';

const AppRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const previousToken = getLocalStorageKey(AUTH_LOCAL_STORAGE_KEY);
    if (previousToken) {
      dispatch(getSession(previousToken));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/cart'
          element={
            <PrivateRoute>
              <ShoppingCart />
            </PrivateRoute>
          }
        />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
