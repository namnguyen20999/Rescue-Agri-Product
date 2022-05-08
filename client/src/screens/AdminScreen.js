import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components/macro';

import NavbarAdmin from '../Components/Navbar/NavbarAdmin';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Orderslist from './OrderList';
import ProductList from './ProductList';
import Userslist from './Userlist';

const StyledNavLink = styled(NavLink)`
  margin-left: 1rem;
  text-decoration: none;
  padding: 10px;
  background-color: #f8c807;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #e0b507;
    color: white;
  }
`;

const AdminTitle = styled.div`
  font-size: 1.6rem;
  align-items: center;
  font-weight: 500;
  color: white;
  padding: 0px 1.5rem;
  background-color: #3bb77e;
  margin-bottom: 1.5rem;
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
      <NavbarAdmin />
      <AdminTitle>Admin Panel</AdminTitle>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <StyledNavLink to={'/admin/userslist'}>Users List</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/productList'}>Products List</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/addProduct'}>Add Product</StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <StyledNavLink to={'/admin/ordersList'}>Orders List</StyledNavLink>
        </Nav.Item>
      </Nav>
      <Switch>
        <Route path="/admin/userslist" component={Userslist} exact />
        <Route path="/admin/ordersList" component={Orderslist} exact />
        <Route path="/admin/productList" component={ProductList} exact />
        <Route path="/admin/addProduct" component={AddProduct} exact />
        <Route path="/admin/editproduct/:productid" component={EditProduct} exact />
      </Switch>
    </Container>
  );
}
