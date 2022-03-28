import React from 'react';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.css';
import logo from '../../assets/logo_images/logo.png';
import { Button, Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shipping</Nav.Link>
            <Nav.Link href="#">Payment</Nav.Link>
          </Nav>
          <NavDropdown.Divider />
          <Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
