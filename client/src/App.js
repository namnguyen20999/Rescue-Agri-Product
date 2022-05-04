import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Components/Cart/Total";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homescreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AddProduct from './screens/AddProduct';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/AddProduct" exact component={AddProduct} />
      </BrowserRouter>
    </div>
  );
}
