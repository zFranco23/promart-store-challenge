import classNames from 'classnames';

import { Category } from '../../../../entities';

type Props = {
  category: Category;
  onSelectCategory: (category: Category) => void;
  isSelected: boolean;
};

const CategoryItem = ({ category, onSelectCategory, isSelected }: Props) => {
  const handleSelectCategory = () => {
    onSelectCategory(category);
  };

  const innerClassName = classNames(
    'inline bg-neutral10 rounded-lg font-semibold py-2 px-8',
    'transition duration-300 ease-in-out',
    {
      'bg-orange': isSelected,
      'text-white': isSelected,
    },
  );
  return (
    <button className={innerClassName} onClick={handleSelectCategory}>
      {category}
    </button>
  );
};

export default CategoryItem;
