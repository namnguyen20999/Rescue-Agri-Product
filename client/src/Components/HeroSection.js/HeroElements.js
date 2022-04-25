import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

export const HeroCard = styled(Card)`
  border: none;
`;

export const HeroBtn = styled(Button)`
  position: absolute;
  font-size: min(max(0.5rem, calc(0.5rem + ((1vw - 0.245625rem) * 0.5239))), 1rem);
  height: 10px
  min-height: 0vw;
  background-color: #3bb77e;
  border-radius: 5px;
  border: none;
  color: white !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
