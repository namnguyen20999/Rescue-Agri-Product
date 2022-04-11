import React from 'react';
import styled from 'styled-components/macro';
import { Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledCard = styled(Card)`
  background: #fff;
  margin: auto;
  margin-top: 4rem;
  overflow: hidden;
  box-shadow: 0 2px 20px grey;
  border-radius: 0.6em;
  cursor: pointer;
  transition: all ease 200ms;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledTitle = styled(Card.Title)`
  font-size: 1.25rem !important;
`;

const StyledCardImg = styled(Card.Img)`
  height: 15.625rem;
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  justify-content: right;
  align-items: stretch;
  box-sizing: content-box;
  margin: 0;
`;
const CartButton = styled(Button)`
  background-color: white;
  margin-right: 1.25rem;
  margin-left: 6.25rem;
  border-radius: 10px;
`;

const FixedPrice = styled.div`
  color: red;
  font-family: sans-serif;
  font-size: 1.313rem;
  font-weight: bold;
`;

const SaledPrice = styled.div`
  color: #bec0d0;
  font-family: sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: line-through;
`;

const addToCart = () => {
  console.log('added');
};

export default function ProductCard({ product }) {
  return (
    <StyledCard style={{ width: '18rem' }} key={product.id} id="test">
      <StyledCardImg variant="top" src={product.image} className="img-fluid" />
      <Card.Body>
        <StyledTitle>{product.name}</StyledTitle>
        <Card.Text>{product.description}</Card.Text>
        <ContainerWrapper id="Add to Cart container">
          <Container>
            <FixedPrice>{product.prices}&nbsp;&nbsp;&#8363;</FixedPrice>
            <SaledPrice>{product.saleprice}&nbsp;&nbsp;&#8363;</SaledPrice>
          </Container>
          <CartButton id="Add to cart button" variant="outline-danger" onClick={addToCart}>
            <ShoppingCartIcon />
          </CartButton>
        </ContainerWrapper>
      </Card.Body>
    </StyledCard>
  );
}
