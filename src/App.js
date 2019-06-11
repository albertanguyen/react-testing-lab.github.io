import React from 'react';
import ProductList from './components/productlist';
import logo from './logo.svg';
import './App.css';


const productList = [
  { id: 1, name: 'Oranges', price: 1000 },
  { id: 2, name: 'Apples', price: 50.25 },
  { id: 3, name: 'Bananas', price: 20.99 },
  { id: 4, name: 'Kiwis', price: 10000 }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My E-Commerce Site</h1>
      </header>
      <div className="App-body">
        <ProductList 
          products = { productList }
          />
      </div>
    </div>
  );
}

export default App;
