import React from 'react';
import styled from 'styled-components';

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
  return (
    <CheckoutContainer>
      <SubTotalContainer>
        <h5>
          Sub-Total:
          <TotalNum> {props.total} &#8363;</TotalNum>
        </h5>
        <Disclaimer>Tax and shipping cost will be calculated later</Disclaimer>
      </SubTotalContainer>

      <StyleButton>Checkout</StyleButton>
    </CheckoutContainer>
  );
}
