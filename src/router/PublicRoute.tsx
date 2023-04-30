import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../modules/auth/hooks";

type Props = {
  children: JSX.Element;
};

/**
 *
 * @returns Return a public route base on auth state.
 */
const PublicRoute: FC<Props> = ({ children }) => {
  const isLoggedIn = useAuth();
  return !isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
