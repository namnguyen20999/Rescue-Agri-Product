import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const SubTotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: right;
  margin-right: 2rem;
`;

export default function Total(props) {
  const cart = useSelector(state => state.cartReducer);
  const cartItems = [cart.cartItems];

  return (
    <CheckoutContainer>
      <SubTotalContainer>
        <h6>Sub-Total {props.total} $</h6>
        <p>Tax and shipping cost will be calculated later</p>
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
      </SubTotalContainer>

      <Button>Checkout</Button>
    </CheckoutContainer>
  );
}
