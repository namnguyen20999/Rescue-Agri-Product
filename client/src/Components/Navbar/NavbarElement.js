import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { Navbar} from 'react-bootstrap';


export const NavCustom = styled(Navbar)`
     background: white;
     z-index: 99;
     position: sticky;
     width:100%;
     top: 0;


    // height: 100px;
    // margin-top: -80px;
    // display: flex;
    // font-size: 1rem;
    // top: 0; 
    // padding: 0 24px;
    // justify-items: center;
    // justify-content: center;
    // border-bottom:2px solid;
    // border-bottom-color: #3BB77E;  

    // @media screen and (max-width: 960px) {
    //     transition: 0.8s all ease;
    // }
`
export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`

export const NavLogo = styled.a`
    color: #3BB77E !important;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
   
`

export const MobileIcon = styled.span`
   // display:none;
        display: flex;
       align-items: center;
       top: 2;
       margin-right: 0;
       transform: translated(-100%, 60%);
       font-size: 1.8rem;
       cursor: pointer;
       justify-content: flex-end;
       color: #3BB77E;

`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 1025px) {
         display:none;
     }
`

export const NavItem = styled.li `
    height: 80px;
`
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
`
export const NavBtn = styled.div`
    display: flex; 
    align-items: center;
    color: white;
    @media screen and (max-width: 760px) {
       // display:none;
    }
`

export const NavBtnLink = styled.div`
    background: #3BB77E;
    display: flex; 
    align-items: center;
    height: 30px;
    padding: 1.3rem;
    border-radius: 20px;
    width: 100px;
    justify-content: center;
    @media screen and (max-width: 760px) {
        //display:none;
    }
`

export const NavCart = styled.a`
    align-items: center;
    display: flex;
    margin-left: 10px;
    text-decoration: none;

    @media screen and (max-width: 760px) {
       // display:none;
    }
`

export const CartTitle = styled.span`
    align-items: center;
    display: flex;
    color: #000000;
    margin-left: 10px;
`

export const NavBtnWrapper = styled.div`
    display: flex;  
    width: 200px;
    justify-content: center;
`

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
`