import ProductCard from "../../../../common/components/ProductCard/ProductCard";

import type { Product } from "../../../../entities";

type Props = {
  products: Product[];
};
const Products = ({ products }: Props) => {
  return (
    <section>
      <p className="mb-10 font-bold text-4xl">Nuestros productos</p>
      <div className="grid grid-cols-12 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
