//dll
import React from 'react';
import './scss/app.scss';
//import pizzas from './assets/pizzas.json';

//my components
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';

const pizzas = [];

// console.log(pizzas);

function App() {
  let [items, setItems] = React.useState([]);
  //эндпоинт таблицы пицц через мокАпи
  //https://629645d075c34f1f3b2cbbb8.mockapi.io/items

  //фетч запросы (нативный метод браузеров запрашивать данные)
  // fetch('https://629645d075c34f1f3b2cbbb8.mockapi.io/items')
  //   .then(res => {
  //     //console.log('ответ', res);
  //     return res.json();
  //   })
  //   .then(json => {
  //     //console.log('Массив пицц', json);
  //     setItems(json);
  //   });

  //useEffect логика похоже на вилДидМаунт Апдейт
  React.useEffect(() => {
    fetch('https://629645d075c34f1f3b2cbbb8.mockapi.io/items')
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map(obj => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
