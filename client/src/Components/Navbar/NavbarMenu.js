import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import logo from '../../assets/logo_images/logo.png';
import { Container, Navbar, Nav, Row, Col, NavDropdown } from 'react-bootstrap';
import {FaBars} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {NavCustom, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink, NavCart, CartTitle, NavBtnWrapper, CartCount} from './NavbarElement'
import { BrowserRouter as Router} from  'react-router-dom'
import SearchBar from './SearchBar'
import SearchBar2 from './SearchBar2';
} from './NavbarElement';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';

const StyledNavLink = styled(Nav.Link)`
  color: #3bb77e !important;
  margin: 0 24px;
`;

export default function NavbarMenu({ handleFiltersChange }) {
  const cartState = useSelector(state => state.cartReducer);
  console.log(cartState);
  return (
    <Router>
      <NavCustom collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <NavLogo className="d-flex" href="/">
            <img src={logo} width="100" height="100" alt="React Bootstrap logo" />
            <span>Vietnamese Farmers</span>
          </NavLogo>
        </Navbar.Brand>

        <Container className=" d-none d-lg-flex" style={{ justifyContent: 'space-around' }}>
          <Col lg={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <NavMenu>
              <SearchBar onSubmit={handleFiltersChange}> </SearchBar>
            </NavMenu>
          </Col>
          <Col
            lg={2}
            style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end' }}
          >
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
          </Col>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <StyledNavLink className="d-lg-none" href="">
              {' '}
              Sign In{' '}
            </StyledNavLink>
            <StyledNavLink className="d-lg-none" href="/cart">
              {' '}
              Cart{' '}
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </NavCustom>
    </Router>
  );
}
