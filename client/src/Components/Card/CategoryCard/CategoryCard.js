import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: black !important;
  text-align: center;
  margin-top: 5rem;
`

export default function CategoryCard() {
  return <StyledTitle>Category</StyledTitle>
}
