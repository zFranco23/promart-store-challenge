import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks";
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

  if (!(typeof isAuthenticating == "boolean" && typeof isLoggedIn == "boolean"))
    return <Loader />;

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
