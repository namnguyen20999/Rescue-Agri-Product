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

const TotalNum = styled.span`
  color: #3BB77E;
`
const Disclaimer = styled.h6`
   font-style: italic;
   color: gray;

`

const StyleButton = styled(Button)`
   background-color: #3BB77E !important;
   border-color: #3BB77E !important;

`

export default function Total(props) {
  const cart = useSelector(state => state.cartReducer);
  const cartItems = [cart.cartItems];

  return (
    <CheckoutContainer>
      <SubTotalContainer>
        <h5>Sub-Total: 
        
        <TotalNum> {props.total} &#8363;</TotalNum>
        </h5>
        <Disclaimer>Tax and shipping cost will be calculated later</Disclaimer>
      </SubTotalContainer>

      <StyleButton>Checkout</StyleButton>
    </CheckoutContainer>
  );
}
