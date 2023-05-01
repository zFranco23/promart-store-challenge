import { Category } from "../../../../entities";
import CategoryItem from "./CategoryItem";

type Props = {
  categories?: Category[];
  selectedCategories: Category[];
  onSelectCategory: (category: Category) => void;
};
const CategoriesSection = ({
  categories,
  selectedCategories,
  onSelectCategory,
}: Props) => {
  return (
    <section>
      <p className="mb-10 font-bold text-4xl"> Las mejores categorías</p>
      <div className="flex gap-6 overflow-auto">
        {categories?.map((c) => (
          <CategoryItem
            key={c}
            category={c}
            onSelectCategory={onSelectCategory}
            isSelected={selectedCategories.includes(c)}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
