import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../actions/orderActions';
import { Table, Container } from 'react-bootstrap';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import styled from 'styled-components';

export default function Orderslist() {
  const StyledButton = styled.button`
    background-color: red;
  `;

  const DeliveredText = styled.p`
    color: green;
  `;

  const dispatch = useDispatch();
  const getordersstate = useSelector(state => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <Container>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map(order => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount} &#8363;</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <DeliveredText>Delivered</DeliveredText>
                    ) : (
                      <StyledButton
                        className="btn"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </StyledButton>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
