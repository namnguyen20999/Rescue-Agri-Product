import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import logo from '../../assets/logo_images/logo.png';
import { Container, Navbar, Nav, Col, Button } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { logout } from '../../actions/userActions';
import {
  NavCustom,
  NavLogo,
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

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const StyledNavLink = styled(Nav.Link)`
  color: #3bb77e !important;
  margin: 0 24px;
`;



export default function NavbarMenu({ handleFiltersChange }) {
  const cartState = useSelector(state => state.cartReducer);
  console.log(cartState);
  const authState = useSelector(state => state.authenticateUserReducer);
  const[currentUser, setCurrentUser] = useState(authState["currentUser"]["data"] ? authState["currentUser"]["data"][0] : {});

  const dispatch = useDispatch()
  function _logout() {
    dispatch(logout);
    localStorage.removeItem("loginInfo");
    setCurrentUser({});
  }
  console.log("currentUser: ", currentUser);
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
          <Col lg={2} style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end' }}>
            <NavBtnWrapper>
            {
              !isEmpty(currentUser)
              ? <h5>Welcome {currentUser["name"]}!</h5> 
              : <Button href="/login">
                  Sign In
                </Button>
            }
            {
              !isEmpty(currentUser)
              ? <Button onClick={_logout}> Sign out </Button>
              : <></>
            }
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
