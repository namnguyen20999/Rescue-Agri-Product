import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import logo from '../../assets/logo_images/logo.png';
import { Container, Navbar, Nav, Col, Button, Dropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { logoutUser } from '../../actions/userActions';
import { NavCustom, NavLogo, NavMenu, NavCart, CartTitle, NavBtnWrapper, CartCount } from './NavbarElement';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';

const StyledNavLink = styled(Nav.Link)`
  color: #3bb77e !important;
  margin: 0 24px;
`;

export default function NavbarMenu() {
  const cartState = useSelector(state => state.cartReducer);
  const userstate = useSelector(state => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

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
              <SearchBar />
            </NavMenu>
          </Col>
          <Col
            lg={2}
            style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end' }}
          >
            <NavBtnWrapper>
              {currentUser ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentUser.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {currentUser.isAdmin ? (
                      <Dropdown.Item href="/admin">Admin Panel</Dropdown.Item>
                    ) : (
                      <Dropdown.Item href="/orders">My Order</Dropdown.Item>
                    )}
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="success" href="/login">
                  Login
                </Button>
              )}
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
              {currentUser ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {currentUser.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/orders">My Order</Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="success" href="/login">
                  Login
                </Button>
              )}
            </StyledNavLink>
            <StyledNavLink className="d-lg-none" href="/cart">
              Cart
            </StyledNavLink>
            <StyledNavLink className="d-lg-none">
              <SearchBar />
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </NavCustom>
    </Router>
  );
}
