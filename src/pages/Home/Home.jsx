//dll
import React from 'react';

//my

import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import { Skeleton } from '../../components/PizzaBlock/Skeleton';

const Home = () => {
  let [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  //useEffect логика похоже на вилДидМаунт Апдейт
  React.useEffect(() => {
    fetch('https://629645d075c34f1f3b2cbbb8.mockapi.io/items')
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
