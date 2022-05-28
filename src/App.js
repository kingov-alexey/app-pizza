//dll
import React from 'react';
import './scss/app.scss';

//my components
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={333} />
            <PizzaBlock title="Острая" price={755} />
            <PizzaBlock title="Сырная" price={444} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
