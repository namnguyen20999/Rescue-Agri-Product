import styled from "styled-components";

export const HeroContainer=styled.div`
    height: 400px;
    display: flex;
    position: relative;
    z-index: 1;
    justify-content: left;
    align-items: center;
`

export const HeroBg=styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

`
export const ImgBg=styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HeroText = styled.p`
    display: flex;
    width: 60%;
    justify-content: left;
    font-weight: bold;
    color: #253D4E;
    font-size: 2.5rem;
    line-height: 3.2rem;
    
`
export const HeroContent = styled.p`
    display: flex;
    width: 30%;
    font-style: italic;
    font-size: 1rem;
    
`

export const HeroMain = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    padding: 0 64px;
    flex-direction: column;
  `

  export const HeroBtn = styled.a`
    width: 10%;
    height: 32px;
    background-color: #3BB77E;
    border-radius: 5px;
    padding: 20px;
    color: white !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

`