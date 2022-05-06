import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components/macro';

import AddProduct from './AddProduct';
// import Editpizza from './Editpizza';
// import Orderslist from './Orderslist';
// import Pizzaslist from './Pizzaslist';
// import Userslist from './Userslist';

const StyledNavLink = styled(Link)`
  margin-left: 1rem;
`;

export default function Adminscreen() {
  const userstate = useSelector(state => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, []);

  return (
    <Container>
      <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <StyledNavLink to={'/admin/userslist'}>Users List</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/pizzaslist'}>Pizzas List</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/addpizza'}>Add Pizza</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/orderslist'}>Orders List</StyledNavLink>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
