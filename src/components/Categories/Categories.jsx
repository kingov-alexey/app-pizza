import React from 'react';

export default function Categories(params) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['все', 'мясная', 'вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = index => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
