import styled from 'styled-components/macro'
import React from 'react'
import { Card, Button } from 'react-bootstrap'

const StyledCard = styled(Card)`
  background: #fff;
  width: 24em;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 2px 20px grey;
  border-radius: 0.6em;
  cursor: pointer;
  transition: all ease 200ms;
  &:hover {
    transform: scale(1.03);
  }
`

const StyledTitle = styled(Card.Title)`
  font-size: 20px !important;
`

const StyledCardImg = styled(Card.Img)`
  height: 300px;
  width: 300px;
`

const AddToCart = styled.p`
  margin: 0;
`

const handleOnclick = e => {
  e.preventDefault()
  console.log('Add to Cart')
}

export default function ProductCard({ product }) {
  return (
    <StyledCard style={{ width: '18rem' }}>
      <StyledCardImg variant="top" src={product.image} className="img-fluid" />
      <Card.Body>
        <StyledTitle>{product.name}</StyledTitle>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={handleOnclick}>
          <AddToCart>AddToCart</AddToCart>
        </Button>
      </Card.Body>
    </StyledCard>
  )
}
