import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import logo from '../../assets/logo_images/logo.png';
import { Container, Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavMenu, NavCart, CartTitle, CartCount } from './NavbarElement';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar2 from './SearchBar2';

const CustomNavBarBrand = styled(Navbar.Brand)`
  color: #3bb77e !important;
`;

const CustomContainer = styled(Container)`
  justify-content: space-between;
`;

export default function NavbarMenu({ handleFiltersChange }) {
  const cartState = useSelector(state => state.cartReducer);
  console.log(cartState);
  return (
    <Router>
      <Navbar bg="light" expand="lg" sticky="top">
        <CustomContainer fluid>
          <CustomNavBarBrand>
            <img src={logo} width="100" height="100" alt="React Bootstrap logo" />
            Vietnamese Farmers
          </CustomNavBarBrand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <NavMenu>
              <SearchBar2 onSubmit={handleFiltersChange}> </SearchBar2>
            </NavMenu>
            <Nav className="me-auto my-2 my-lg-0 justtify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
              <NavLink href="/">Sign In</NavLink>
              <NavCart href="/cart">
                <AiOutlineShoppingCart size={40} color={'#000000'} />
                <CartCount> {cartState.cartItems.length}</CartCount>
                <CartTitle>Cart</CartTitle>
              </NavCart>
            </Nav>
            <NavDropdown.Divider />
          </Navbar.Collapse>
        </CustomContainer>
      </Navbar>

      {/* <NavCustom>
        <NavbarContainer>
          <NavLogo href="/">
            <img src={logo} width="100" height="100" alt="React Bootstrap logo" />
            Vietnamese Farmers
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <SearchBar2 onSubmit={handleFiltersChange}> </SearchBar2>
          </NavMenu>
          <NavBtnWrapper>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            <NavCart href="/cart">
              <AiOutlineShoppingCart size={40} color={'#000000'} />
              <CartCount> {cartState.cartItems.length}</CartCount>
              <CartTitle>Cart</CartTitle>
            </NavCart>
          </NavBtnWrapper>
        </NavbarContainer>
      </NavCustom> */}
    </Router>
  );
}
