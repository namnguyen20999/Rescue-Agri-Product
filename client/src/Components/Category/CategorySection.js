import React from 'react';
import fruit from '../../assets/img/fruit.png';
import carrot from '../../assets/img/carrot.png';
import apple from '../../assets/img/apple.png';
import orange from '../../assets/img/orange.png';
import potato from '../../assets/img/potato.png';
import strawberry from '../../assets/img/strawberry.png';
import vege from '../../assets/img/vege.png';
import { CateImg, CateCardTitle, CateCardContent, CateTitle, CateCard, CateContainer } from './CategoryElement';

import { Container, Row, Col } from 'react-bootstrap';

export const Category = () => {
  return (
    <CateContainer>
      <CateTitle>Explore Categories</CateTitle>
      <Row>
        <Col>
          <CateCard style={{ backgroundColor: '#FEEFEA' }}>
            <CateImg src={fruit} />
            <CateCardTitle>Fruit</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
        <Col>
          <CateCard style={{ backgroundColor: '#FFF3FF' }}>
            <CateImg src={apple} />
            <CateCardTitle>Apple</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
        <Col>
          <CateCard style={{ backgroundColor: '#F2FCE4' }}>
            <CateImg src={carrot} />
            <CateCardTitle>Carrot</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
        <Col>
          <CateCard style={{ backgroundColor: '#FEEFEA' }}>
            <CateImg src={orange} />
            <CateCardTitle>Orange</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
        <Col>
          <CateCard style={{ backgroundColor: '#ECFFEC' }}>
            <CateImg src={potato} />
            <CateCardTitle>Potato</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
        <Col>
          <CateCard style={{ backgroundColor: '#FFFCEB' }}>
            <CateImg src={strawberry} />
            <CateCardTitle>Strawberry</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
        <Col>
          <CateCard style={{ backgroundColor: '#DEF9EC' }}>
            <CateImg src={vege} />
            <CateCardTitle>Vegetable</CateCardTitle>
            <CateCardContent>30 items</CateCardContent>
          </CateCard>
        </Col>
      </Row>
    </CateContainer>
    // <CateContainer style={{ display: props.displaySection ? '' : 'none' }}>
    //   <CateTitle>Explore Categories</CateTitle>
    //   <CateBox>

    //   </CateBox>
    // </CateContainer>
  );
};
