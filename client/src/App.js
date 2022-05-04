import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Components/Cart/Total";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homescreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AddProduct from './screens/AddProduct';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/register" exact component={RegisterScreen}/>
        <Route path="/login" exact component={LoginScreen}/>
        <Route path="/AddProduct" exact component={AddProduct} />
      </BrowserRouter>
    </div>
  );
}
