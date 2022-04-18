import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../actions/cartActions';

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

export default function Item(item, key) {
  const dispatch = useDispatch();
  const handleCartQuantityChange = (cartItem, counter) => {
    dispatch(cartActions(cartItem, counter));
  };
  return (
    <Row>
      <ProductContainer>
        <Col>
          <Row>
            <Col>
              <ItemContainer>Product</ItemContainer>
              <ItemContainer>
                <img src={item.item.image} style={{ width: '6rem', maxWidth: '100%' }} />
              </ItemContainer>
            </Col>
            <Col>
              <Row>{item.item.name}</Row>
              <Row>
                <RemovedButton onClick={() => handleCartQuantityChange(item.item, 'removeItem')}>Remove</RemovedButton>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <ItemContainer>Price</ItemContainer>
          <ItemContainer>{item.item.prices} $</ItemContainer>
        </Col>
        <Col>
          <ItemContainer>
            <ItemContainer>Quantity</ItemContainer>
            <QuantityPickerContainer>
              <IconButton
                aria-label="add"
                size="normal"
                onClick={() => handleCartQuantityChange(item.item, 'increase')}
              >
                <AddCircleIcon fontSize="inherit" sx={{ color: green[500] }} />
              </IconButton>
              {item.item.cartQuantity}
              <IconButton
                aria-label="decrease"
                size="normal"
                onClick={() => handleCartQuantityChange(item.item, 'decrease')}
              >
                <RemoveCircleOutlineIcon fontSize="inherit" sx={{ color: red[500] }} />
              </IconButton>
            </QuantityPickerContainer>
          </ItemContainer>
        </Col>
        <Col>
          <ItemContainer>
            <ItemContainer>Total</ItemContainer>
            <ItemContainer>{item.item.prices * item.item.cartQuantity} $</ItemContainer>
          </ItemContainer>
        </Col>
      </ProductContainer>
    </Row>
  );
}
