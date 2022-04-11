import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './Components/Navbar/NavbarMenu';
import Homescreen from './screens/Homescreen/Homescreen';

export default function App() {
  return (
    <div>
      <NavbarMenu />
      <Homescreen />
    </div>
  );
}
