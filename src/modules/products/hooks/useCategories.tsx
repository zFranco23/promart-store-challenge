import { useMemo } from "react";
import { useAppSelector } from "../../../hooks/store";

/**
 * @returns Custom hook for handle product categories state.
 */
const useCategories = () => {
  const categories = useAppSelector((state) => state.products.categories);
  const isFetching = useAppSelector(
    (state) => state.products.isFetchingCategories
  );
  //Return memoized state, to avoid re-renders.
  return useMemo(() => ({ categories, isFetching }), [categories, isFetching]);
};

export default useCategories;
