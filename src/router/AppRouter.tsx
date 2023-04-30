import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Home from "../modules/home/pages/Home";
import Login from "../modules/auth/pages/Login";

import { getSession } from "../modules/auth/duck";
import { getLocalStorageKey } from "../utils/storage";
import { useAppDispatch } from "../hooks/store";

const AppRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const previousToken = getLocalStorageKey("P_U_TOKEN");
    if (previousToken) {
      dispatch(getSession(previousToken));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
