import React from 'react';
import heroimg from '../../assets/img/heroimg.png';
import { HeroBtn, HeroCard } from './HeroElements';
import { BsArrowRight } from 'react-icons/bs';
import { Row, Col, Card } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Row>
      <Col>
        <HeroCard className="bg-white text-dark">
          <Card.Img src={heroimg} />
          <Card.ImgOverlay>
            <Card.Title>'Rescue' Agriculture Products</Card.Title>
            <Card.Text>RAP is created with the hope to support the sale of agricultural products in Vietnam</Card.Text>
            <HeroBtn>
              Let's start
              <BsArrowRight />
            </HeroBtn>
          </Card.ImgOverlay>
        </HeroCard>
      </Col>
    </Row>
  );
};

export default HeroSection;
