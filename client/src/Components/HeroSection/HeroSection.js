import React from 'react';
import heroimg from '../../assets/img/heroimg.png';
import { HeroBtn, HeroMain, HeroContent, HeroText, HeroContainer, HeroBg, ImgBg } from './HeroElements';
import { BsArrowRight } from 'react-icons/bs';
import { Col } from 'react-bootstrap';

const HeroSection = props => {
  return (
    <HeroContainer style={{ display: props.displaySection ? '' : 'none' }}>
      <HeroMain>
        <Col xs={12} md={8}>
          <HeroText>'Rescue' Agriculture Products</HeroText>
        </Col>
        <Col xs={10} md={5}>
          <HeroContent>
            RAP is created with the hope to support the sale of agricultural products in Vietnam
          </HeroContent>
        </Col>
        <Col xs={7} md={4} lg={2}>
          <HeroBtn>
            Let's start
            <BsArrowRight />
          </HeroBtn>
        </Col>
      </HeroMain>
      <HeroBg>
        <ImgBg src={heroimg} />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
