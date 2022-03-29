import React from 'react'
import products from '../../data/productData'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components/macro'
import ProductCard from '../../Components/Card/ProductCard/ProductCard'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Homescreen() {
  return (
    <StyledContainer fluid>
      <Row>
        {products &&
          products.map(product => {
            return (
              <Col lg={3} md={4} sm={6} xs={12} key={product.id}>
                <ProductCard product={product} />
              </Col>
            )
          })}
      </Row>
    </StyledContainer>
  )
}
