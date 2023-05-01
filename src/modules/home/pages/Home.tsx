import { useCallback, useEffect, useState } from 'react';

import PageLayout from '../../../common/layout/PageLayout/PageLayout';
import Loader from '../../../common/components/Loader/Loader';
import CategoriesSection from '../components/CategoriesSection/Categories';
import Products from '../components/ProductSection/Products';

import { useProducts, useCategories } from '../../products/hooks/index';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';

import { actions as homeActions } from '../duck';
import type { Category, Product } from '../../../entities';

const Home = () => {
  const { products, isFetching: isFetchingProducts } = useProducts();
  const { categories, isFetching: isFetchingCategories } = useCategories();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const dispatch = useAppDispatch();
  const selectedCategories = useAppSelector((state) => state.home.categoriesSelected);

  const onSelectCategory = useCallback(
    (c: Category) => {
      dispatch(homeActions.updateCategoriesSelected(c));
    },
    [dispatch],
  );

  useEffect(() => {
    if (products) {
      if (selectedCategories.length) {
        const filteredProducts = products.filter((p) => selectedCategories.includes(p.category));
        setFilteredProducts(filteredProducts);
      } else setFilteredProducts(products);
    }
  }, [selectedCategories, products]);

  return (
    <PageLayout>
      {(isFetchingProducts || isFetchingCategories) && <Loader />}
      <div className='flex flex-col gap-10'>
        <CategoriesSection
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
        />
        <Products products={filteredProducts} />
      </div>
    </PageLayout>
  );
};

export default Home;
