import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/store";
import CategoriesSection from "../components/CategoriesSection/Categories";
import { Category, Product } from "../../../entities";
import Products from "../components/ProductSection/Products";
import PageLayout from "../../../common/layout/PageLayout/PageLayout";
import useProducts from "../../products/hooks/useProducts";
import Loader from "../../../common/components/Loader/Loader";
import useCategories from "../../products/hooks/useCategories";

const Home = () => {
  const { products, isFetching: isFetchingProducts } = useProducts();
  const { categories, isFetching: isFetchingCategories } = useCategories();

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const onSelectCategory = useCallback((c: Category) => {
    setSelectedCategories((prev) => {
      const exists = prev.includes(c);
      if (exists) return prev.filter((el) => el !== c);
      else return [...prev, c];
    });
  }, []);

  useEffect(() => {
    if (products) {
      if (selectedCategories.length) {
        const filteredProducts = products.filter((p) =>
          selectedCategories.includes(p.category)
        );
        setFilteredProducts(filteredProducts);
      } else setFilteredProducts(products);
    }
  }, [selectedCategories, products]);

  return (
    <PageLayout>
      {(isFetchingProducts || isFetchingCategories) && <Loader />}
      <div className="flex flex-col gap-10">
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
