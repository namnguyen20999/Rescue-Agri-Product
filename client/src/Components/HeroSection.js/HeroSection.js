import React from 'react';
import heroimg from '../../assets/img/heroimg.png';
import { HeroBtn, HeroMain, HeroContent, HeroText, HeroContainer, HeroBg, ImgBg, HContainer } from './HeroElements';
import { BsArrowRight } from 'react-icons/bs';
import { Container, Card, Image } from 'react-bootstrap';

const HeroSection = props => {
  return (
    <HContainer>
      <HeroContainer src={heroimg} />
      <HeroText>'Rescue' Agriculture Products</HeroText>
    </HContainer>
    // <HeroContainer style={{ display: props.displaySection ? '' : 'none' }}>
    //   <HeroMain>
    //     <HeroText>'Rescue' Agriculture Products</HeroText>
    //     <HeroContent>RAP is created with the hope to support the sale of agricultural products in Vietnam</HeroContent>
    //     <HeroBtn>
    //       Let's start
    //       <BsArrowRight />
    //     </HeroBtn>
    //   </HeroMain>
    //   <HeroBg>
    //     <ImgBg src={heroimg} />
    //   </HeroBg>
    // </HeroContainer>
  );
};

export default HeroSection;
