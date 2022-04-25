import React from 'react';
import fruit from '../../assets/img/fruit.png';
import carrot from '../../assets/img/carrot.png';
import apple from '../../assets/img/apple.png';
import orange from '../../assets/img/orange.png';
import potato from '../../assets/img/potato.png';
import strawberry from '../../assets/img/strawberry.png';
import vege from '../../assets/img/vege.png';
import {
  CateImg,
  CateCardTitle,
  CateCardContent,
  CateContainer,
  CateTitle,
  CateBox,
  CateCard
} from './CategoryElement';

export const Category = props => {
  return (
    <CateContainer style={{ display: props.displaySection ? '' : 'none' }}>
      <CateTitle>Explore Categories</CateTitle>
      <CateBox>
        <CateCard style={{ backgroundColor: '#FEEFEA' }}>
          <CateImg src={fruit} />
          <CateCardTitle>Fruit</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>
        <CateCard style={{ backgroundColor: '#FFF3FF' }}>
          <CateImg src={apple} />
          <CateCardTitle>Apple</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>

        <CateCard style={{ backgroundColor: '#F2FCE4' }}>
          <CateImg src={carrot} />
          <CateCardTitle>Carrot</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>
        <CateCard style={{ backgroundColor: '#FEEFEA' }}>
          <CateImg src={orange} />
          <CateCardTitle>Orange</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>
        <CateCard style={{ backgroundColor: '#ECFFEC' }}>
          <CateImg src={potato} />
          <CateCardTitle>Potato</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>

        <CateCard style={{ backgroundColor: '#FFFCEB' }}>
          <CateImg src={strawberry} />
          <CateCardTitle>Strawberry</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>

        <CateCard style={{ backgroundColor: '#DEF9EC' }}>
          <CateImg src={vege} />
          <CateCardTitle>Vegetable</CateCardTitle>
          <CateCardContent>30 items</CateCardContent>
        </CateCard>
      </CateBox>
    </CateContainer>
  );
};
