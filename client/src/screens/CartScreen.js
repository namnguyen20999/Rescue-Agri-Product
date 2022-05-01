import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Total from '../Components/Cart/Total';
import Item from '../Components/Cart/Item';
import NavbarMenu from '../Components/Navbar/NavbarMenu';
import styled from 'styled-components';

export default function CartScreen() {
  const cart = useSelector(state => state.cartReducer);
  const cartItems = cart.cartItems;

  const addition = (acc, currentValue) => {
    return acc + currentValue.prices * currentValue.cartQuantity;
  };

  const CartTitle = styled.div`
    font-size: 1.6rem;
    align-items: center;
    font-weight: 500;
    margin: 0px 3rem;
    color: white;
    padding: 0px 1.5rem;
    background-color: #3bb77e;
  `;
  const CartTitleRow = styled(Row)`
    color: #3bb77e;
    padding: 1.5rem 0 0 0;
  `;
  const CartTitleCol = styled(Col)`
    text-align: center;
  `;
  const CartNoItems = styled.div`
    font-size: 1.6rem;
    align-items: center;
    margin: 0px 3rem;
    padding: 1.5rem;
    text-align: center;
  `;

  const BackButton = styled.div`
    text-align: center;
    padding: 0 1.5rem;
  `;

  const total = cartItems.reduce(addition, 0);
  return (
    <div>
      <NavbarMenu />
      <Container fluid>
        <Row>
          <Col>
            <CartTitle>Shopping cart</CartTitle>
          </Col>
        </Row>
        {cartItems.length === 0 ? (
          <>
            <CartNoItems>Your cart is currently empty</CartNoItems>
            <BackButton>
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
            </BackButton>
          </>
        ) : (
          <Container>
            <CartTitleRow className="d-none d-md-flex">
              <CartTitleCol>Product</CartTitleCol>
              <CartTitleCol>Price</CartTitleCol>
              <CartTitleCol>Quantity</CartTitleCol>
              <CartTitleCol>Total</CartTitleCol>
              <CartTitleCol></CartTitleCol>
            </CartTitleRow>
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
    </div>
  );
}
