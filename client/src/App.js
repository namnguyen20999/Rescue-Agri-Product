import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarMenu from './Components/Navbar/NavbarMenu';
import Homescreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

export default function App() {
  return (
    <div>
      <NavbarMenu />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
      </BrowserRouter>
    </div>
  );
}
