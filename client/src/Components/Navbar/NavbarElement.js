import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 500px;
  //background-color: blue;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavCart = styled.a`
  align-items: center;
  display: flex;
  margin-left: 10px;
  text-decoration: none;
`;

export const CartTitle = styled.span`
  align-items: center;
  display: flex;
  color: #000000;
  margin-left: 10px;
`;

export const CartCount = styled.span`
  font-size: 10px;
  background: #3BB77E;
  width: 15px;
  justify-content:
  display:flex;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 20px;
  margin-left: -10px;
`;
