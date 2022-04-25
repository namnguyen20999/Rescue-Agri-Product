import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import logo from '../../assets/logo_images/logo.png';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  NavCustom,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavCart,
  CartTitle,
  NavBtnWrapper,
  CartCount
} from './NavbarElement';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchBar2 from './SearchBar2';

const StyledNavLink = styled(Nav.Link)`
  color: black !important;
`;

export default function NavbarMenu({ handleFiltersChange }) {
  const cartState = useSelector(state => state.cartReducer);
  console.log(cartState);
  return (
    <Router>
      {/*  <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand>
                  <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0 justtify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
                    <StyledNavLink href="/">Home</StyledNavLink>
                    <StyledNavLink href="/cart">Cart {cartState.cartItems.length}</StyledNavLink>
                    <StyledNavLink href="#">Payment</StyledNavLink>
                  </Nav>
                  <NavDropdown.Divider />
                </Navbar.Collapse>
              </Container>
            </Navbar>
  */}
      <NavCustom>
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
      </NavCustom>
    </Router>
  );
}
