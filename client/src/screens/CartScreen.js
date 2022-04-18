import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Total from '../Components/Cart/Total';
import Item from '../Components/Cart/Item';

export default function CartScreen() {
  const cart = useSelector(state => state.cartReducer);
  const cartItems = cart.cartItems;

  const addition = (acc, currentValue) => {
    return acc + currentValue.prices * currentValue.cartQuantity;
  };

  const total = cartItems.reduce(addition, 0);
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Shopping cart</h1>
        </Col>
      </Row>
      {cartItems.length === 0 ? (
        <>
          <h3>Your cart is currently empty</h3>
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
            <span>Back to shopping</span>
          </Link>
        </>
      ) : (
        <Container>
          {cartItems.map(item => {
            return <Item item={item} key={item.id} />;
          })}
          <Total total={total} />
        </Container>
      )}

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </Container>
  );
}
