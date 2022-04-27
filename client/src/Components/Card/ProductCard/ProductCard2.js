import React from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { cartActions } from '../../../actions/cartActions';
import 'react-toastify/dist/ReactToastify.css';
import {
  PriceContainer,
  StyledText,
  StyledCard,
  StyledTitle,
  StyledCardImg,
  ContainerWrapper,
  CartButton,
  FixedPrice,
  SaledPrice,
  CardCate
} from './ProductCartElement';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function ProductCard2({ product }) {
  const dispatch = useDispatch();

  const addToCart = (product, counter) => {
    dispatch(cartActions(product, counter));
  };
  return (
    <StyledCard style={{ width: '18rem' }} key={product.id} id="test">
      <StyledCardImg variant="top" src={product.image} className="img-fluid" />
      <Card.Body>
        <CardCate>{product.category}</CardCate>
        <StyledTitle>{product.name}</StyledTitle>
        <StyledText>{product.description}</StyledText>
        <ContainerWrapper id="Add to Cart container">
          <PriceContainer>
            <FixedPrice>{product.prices}&nbsp;&#8363;&nbsp;</FixedPrice>
            <SaledPrice>{product.saleprice}&nbsp;&nbsp;&#8363;</SaledPrice>
          </PriceContainer>
          <CartButton id="Add to cart button" variant="sucess" onClick={() => addToCart(product, 'increase')}>
            <AiOutlineShoppingCart />
            &nbsp;&nbsp;Add
          </CartButton>
        </ContainerWrapper>
      </Card.Body>
    </StyledCard>
  );
}
