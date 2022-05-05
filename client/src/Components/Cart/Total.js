import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";

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
  color: #3bb77e;
`;
const Disclaimer = styled.h6`
  font-style: italic;
  color: gray;
`;

const StyleButton = styled(Button)`
  background-color: #3bb77e !important;
  border-color: #3bb77e !important;
`;

export default function Total(props) {
  return (
    <CheckoutContainer>
      <SubTotalContainer>
        <h5>
          Sub-Total:
          <TotalNum> {props.total} &#8363;</TotalNum>
        </h5>
        <Disclaimer>Tax and shipping cost will be calculated later</Disclaimer>
      </SubTotalContainer>

       <div>
      <StripeCheckout
            className="center"
            stripeKey="pk_test_51KshNRDPWOCxraFcyr19OZ1XQ2eNsuLiDk09x1wgR09HjXWUidcp46gzrpkGbZJRVsf0yS5d66e2JIUmW7hMW1Cc00tDKIovZz"
            name="Vietnamese Farmers"
            currency="vnd"
            image='https://imgb13.photophoto.cn/20190415/katongnongmingbobotouxiang-32974796_3.jpg'
            amount={props.total}
            billingAddress
            shippingAddress
          >
          <button>Checkout</button>
          </StripeCheckout>
        </div>
    </CheckoutContainer>
  );
}
