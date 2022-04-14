import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const QuantityButton = styled.div`
  border: none;
  outline: none;
  background: none;
  padding: 0.7rem 1.7rem;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 7.125rem;
  max-width: 100%;
  border: 0.5px solid rgb(177, 177, 177);
  border-radius: 5px;
`;

const Quanity = styled.div`
  padding: 0.7rem 0;
`;

const RemovedButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-top: 0.7 rem;
  cursor: pointer;
  color: red;
  width: fit-content;
  padding: 0;
  text-decoration: underline;
`;

export default function CartScreen() {
  const cart = useSelector(state => state.cartReducer);
  const cartItems = cart.cartItems;
  console.log(cartItems);
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Your cart items</h1>
        </Col>
      </Row>
      <Row>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          <span>Continue Shopping</span>
        </Link>
      </Row>
      <Container>
        <Row>
          <Col>Product</Col>
          <Col>Price</Col>
          <Col>Quantity</Col>
          <Col>Total</Col>
        </Row>
        {cartItems.map(item => {
          return (
            <Row key={item.id}>
              <Col>
                <Row>
                  <Col>
                    <img src={item.image} style={{ width: '5rem', maxWidth: '100%' }} />
                  </Col>
                  <Col>
                    <Row>{item.name}</Row>
                    <Row>
                      <RemovedButton>Remove</RemovedButton>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>{item.prices} $</Col>
              <Col>
                <ButtonGroup>
                  <QuantityButton>+</QuantityButton>
                  <Quanity>{item.cartQuantity}</Quanity>
                  <QuantityButton>-</QuantityButton>
                </ButtonGroup>
              </Col>
              <Col>{item.prices * item.cartQuantity} $</Col>
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}
