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
      <p className="mb-2 font-bold text-4xl"> Las mejores categorías</p>
      <div className="flex flex-row w-full gap-3 overflow-auto">
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
