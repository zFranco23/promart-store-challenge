import { useAppSelector } from "../../../hooks/store";

export const useAuth = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return !!isLoggedIn;
};
