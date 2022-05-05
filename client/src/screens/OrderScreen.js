import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getUserOrders } from '../actions/orderActions';
import NavbarMenu from '../Components/Navbar/NavbarMenu';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

export default function OrderScreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector(state => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <NavbarMenu />
      <Container>
        <Row>
          <h2 style={{ fontSize: '35px' }}>My Orders</h2>
        </Row>
        <Container>
          {loading && <Loading />}
          {error && <Error error="Something went wrong" />}
          {orders &&
            orders.map(order => {
              return (
                <Container>
                  <hr />
                  <Row>
                    <Col>
                      <div key={order.id}>
                        <h2 style={{ fontSize: '25px' }}>Items</h2>
                        {order.orderItems.map(item => {
                          return (
                            <div>
                              <p>
                                {item.name} * {item.cartQuantity} = {item.prices * item.cartQuantity} &#8363;
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </Col>
                    <Col>
                      <h2 style={{ fontSize: '25px' }}>Address</h2>
                      <p>Street : {order.shippingAddress.street}</p>
                      <p>City : {order.shippingAddress.city}</p>
                      <p>Country : {order.shippingAddress.country}</p>
                      <p>ZipCode : {order.shippingAddress.pincode}</p>
                    </Col>
                    <Col>
                      <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                      <p>Order Amount : {order.orderAmount} &#8363;</p>
                      <p>Date : {order.createdAt.substring(0, 10)}</p>
                    </Col>
                  </Row>
                </Container>
              );
            })}
        </Container>
      </Container>
    </div>
  );
}
