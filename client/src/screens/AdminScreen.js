import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components/macro';

// import AddProduct from './AddProduct';
// import Editpizza from './Editpizza';
// import Orderslist from './Orderslist';
import ProductList from './ProductList';
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
          <StyledNavLink to={'/admin/productList'}>Products List</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/addProduct'}>Add Pizza</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/ordersList'}>Orders List</StyledNavLink>
        </Nav.Item>
      </Nav>
      <Switch>
        {/* <Route path="/admin" component={Userslist} exact /> */}
        {/* <Route path="/admin/userslist" component={Userslist} exact />
        <Route path="/admin/ordersList" component={Orderslist} exact /> */}
        <Route path="/admin/productList" component={ProductList} exact />
        {/* <Route path="/admin/addProduct" component={Addpizza} exact />
        <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact /> */}
      </Switch>
    </Container>
  );
}
