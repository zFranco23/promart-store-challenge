import { FC, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks";
import { getLocalStorageKey } from "../utils/storage";

import Loader from "../common/components/Loader/Loader";

type Props = {
  children: JSX.Element;
};

/**
 *
 * @returns Return a private route base on auth state.
 */
const PrivateRoute: FC<Props> = ({ children }) => {
  const { isLoggedIn, isAuthenticating } = useAuth();

  const initialAuthDone = useMemo(() => {
    const previousToken = getLocalStorageKey("P_U_TOKEN");
    return previousToken
      ? typeof isAuthenticating == "boolean" && typeof isLoggedIn == "boolean"
      : true;
  }, [isAuthenticating, isLoggedIn]);

  if (!initialAuthDone) return <Loader />;

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
