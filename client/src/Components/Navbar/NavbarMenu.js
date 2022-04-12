import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import logo from '../../assets/logo_images/logo.png';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { getAllProduct } from '../../actions/productActions';

const StyledNavLink = styled(Nav.Link)`
  color: black !important;
`;

export default function NavbarMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 justtify-content-end" style={{ maxHeight: '100px' }} navbarScroll>
            <StyledNavLink href="#action1">Home</StyledNavLink>
            <StyledNavLink href="#action2">Shipping</StyledNavLink>
            <StyledNavLink href="#">Payment</StyledNavLink>
          </Nav>
          <NavDropdown.Divider />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
