import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavCustom = styled.nav`
  background: white;
  height: 100px;
  // margin-top: -80px;
  display: flex;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 24px;
  justify-items: center;
  justify-content: center;
  border-bottom: 2px solid;
  border-bottom-color: #3bb77e;

  @media screen and (max-width: 960px) {
    transition: top 1s ease;
  }
`;
export const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled.a`
  color: #3bb77e !important;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    top: 2;
    margin-right: 0;
    transform: translated(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    justify-content: flex-end;
    color: #fff;
  }
`;

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

export const NavItem = styled.li`
  height: 80px;
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
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  color: white;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  background: #3bb77e;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 1.3rem;
  border-radius: 20px;

  @media screen and (max-width: 760px) {
    display: none;
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

export const NavBtnWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
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
