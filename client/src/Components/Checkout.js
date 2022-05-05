import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import Success from '../Components/Success';
export default function Checkout({ subtotal }) {
  const orderstate = useSelector(state => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  const StyleButton = styled(Button)`
    background-color: #3bb77e !important;
    border-color: #3bb77e !important;
  `;

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      <StripeCheckout
        amount={subtotal}
        shippingAddress
        token={tokenHander}
        stripeKey="pk_test_51KvHk8AYhhE48qhvpB8Z9qQpwCsJXrVEh7dyX8ZBAAP86RugGtQepzsO5MF9HJBqro1zekwicOvpYT3Kp5zzE8ut00n4kWgTxc"
        currency="VND"
      >
        <StyleButton className="btn">Checkout</StyleButton>
      </StripeCheckout>
    </div>
  );
}
