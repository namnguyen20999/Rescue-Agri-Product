import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../actions/cartActions';
import { VscTrash } from 'react-icons/vsc';

const ProductContainer = styled.div`
  border-top: 0.5px solid rgb(177, 177, 177);
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
  padding-top: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 24px 64px;

  }
`;

const ItemContainer = styled(Row)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    display: flex;
}
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

const TitleCol= styled(Col)`
  @media screen and (max-width: 768px) {
    text-align: right;
    padding: 0;

  }
`

export default function Item(item, key) {
  const dispatch = useDispatch();
  const handleCartQuantityChange = (cartItem, counter) => {
    dispatch(cartActions(cartItem, counter));
  };
  return (
    <Row>
      <ProductContainer >
        <Col xs="auto" md lg>
          <Row>
            <Col>
              <ItemContainer>
                <img src={item.item.image} style={{ width: '6rem', maxWidth: '100%'}} />
              </ItemContainer>
            </Col>
            <TitleCol style={{display:'flex',  flexDirection:'column', justifyContent: 'center' }} >
              <div >{item.item.name}</div>
              <div style={{color:"#3BB77E"}}> {item.item.description}</div>
            </TitleCol>

          </Row>
        </Col>
        <hr  className="d-md-none" style={{ border: "1px solid green", borderRadius: "5px"}}></hr>
        <Col >
          <ItemContainer><Col className="d-md-none">Price</Col>{item.item.prices} &#8363;</ItemContainer>
        </Col>
          <Col >
            <ItemContainer>
            <Col className="d-md-none">Quantity</Col>
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
              <ItemContainer> <Col className="d-md-none">Total</Col> {item.item.prices * item.item.cartQuantity} &#8363;</ItemContainer>
          </Col>
          <Col>
          <ItemContainer >
          <Col className="d-md-none"></Col>
          <RemovedButton onClick={() => handleCartQuantityChange(item.item, 'removeItem')}>
          <VscTrash/>
          </RemovedButton>
          </ItemContainer>
          </Col>
      </ProductContainer>
    </Row>
  );
}
