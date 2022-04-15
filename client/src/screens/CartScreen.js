import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { green, red } from '@mui/material/colors';

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

const QuantityPickerContainer = styled.div`
  border: 0.5px solid rgb(177, 177, 177);
  border-radius: 5px;
  width: fit-content;
  block-size: fit-content;
  display: flex;
  align-items: center;
`;

const ProductContainer = styled.div`
  border-top: 0.5px solid rgb(177, 177, 177);
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  padding-top: 2rem;
`;

const ItemContainer = styled(Row)`
  align-items: center;
  display: flex;
  justify-content: center;
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
        {cartItems.map(item => {
          return (
            <Row key={item.id}>
              <ProductContainer>
                <Col>
                  <Row>
                    <Col>
                      <ItemContainer>Product</ItemContainer>
                      <ItemContainer>
                        <img src={item.image} style={{ width: '6rem', maxWidth: '100%' }} />
                      </ItemContainer>
                    </Col>
                    <Col>
                      <Row>{item.name}</Row>
                      <Row>
                        <RemovedButton>Remove</RemovedButton>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <ItemContainer>Price</ItemContainer>
                  <ItemContainer>{item.prices} $</ItemContainer>
                </Col>
                <Col>
                  <ItemContainer>
                    <ItemContainer>Quantity</ItemContainer>
                    <QuantityPickerContainer>
                      <IconButton aria-label="add" size="normal">
                        <AddCircleIcon fontSize="inherit" sx={{ color: green[500] }} />
                      </IconButton>
                      {item.cartQuantity}
                      <IconButton aria-label="decrease" size="normal">
                        <RemoveCircleOutlineIcon fontSize="inherit" sx={{ color: red[500] }} />
                      </IconButton>
                    </QuantityPickerContainer>
                  </ItemContainer>
                </Col>
                <Col>
                  <ItemContainer>
                    <ItemContainer>Total</ItemContainer>
                    <ItemContainer>{item.prices * item.cartQuantity} $</ItemContainer>
                  </ItemContainer>
                </Col>
              </ProductContainer>
            </Row>
          );
        })}
      </Container>
    </Container>
  );
}
