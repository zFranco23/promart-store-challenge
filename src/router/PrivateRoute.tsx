import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks";

type Props = {
  children: JSX.Element;
};

/**
 *
 * @returns Return a private route base on auth state.
 */
const PrivateRoute: FC<Props> = ({ children }) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
