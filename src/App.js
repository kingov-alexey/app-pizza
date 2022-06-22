//dll
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import pizzas from './assets/pizzas.json';

//my components
import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

const pizzas = [];

// console.log(pizzas);

function App() {
  const pathname = window.location.pathname;
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
