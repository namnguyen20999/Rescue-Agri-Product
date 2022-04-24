import styled from 'styled-components/macro';
import { Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const StyledCard = styled(Card)`
  background: #fff;
  margin: auto;
  margin-top: 4rem;
  overflow: hidden;
  border-radius: 0.6em;
  cursor: pointer;
  transition: all ease 200ms;
  &:hover {
    transform: scale(1.03);
  }
`;

export const StyledTitle = styled(Card.Title)`
  font-size: 1.25rem !important;
`;

export const StyledCardImg = styled(Card.Img)`
  height: 9rem;
  object-fit: contain;
`;

export const StyledText = styled(Card.Text) `
  color: #3BB77E !important;
`

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;

`;
export const CartButton = styled(Button)`
  background-color: #DEF9EC;
 // margin-right: 3rem;
  //margin-left: 6.25rem;
  border-radius: 10px;
  color: #3BB77E;

    &:hover {
        background-color: #3BB77E;
        color: white;
    }  
`;
export const PriceContainer = styled.div`
//background-color: blue;
display: flex;
align-items: center;
`;

export const FixedPrice = styled.div`
  color: #3BB77E;
  font-size: 1.313rem;
  font-weight: 600;
`;

export const SaledPrice = styled.div`
  color: #bec0d0;
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: line-through;
`;

export const CardCate = styled.div`
  color: #ADADAD;
  font-weight: 200;
  margin-bottom: 8px;
`;