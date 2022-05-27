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
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
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
