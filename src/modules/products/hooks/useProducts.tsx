import { useMemo } from "react";
import { useAppSelector } from "../../../hooks/store";

/**
 * @returns Custom hook for handle products state.
 */
const useProducts = () => {
  const products = useAppSelector((state) => state.products.products);
  const isFetching = useAppSelector(
    (state) => state.products.isFetchingProducts
  );
  //Return memoized state, to avoid re-renders.
  return useMemo(() => ({ products, isFetching }), [products, isFetching]);
};

export default useProducts;
