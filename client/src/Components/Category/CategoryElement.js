import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const CateContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: left;
  align-items: center;
  padding: 48px 4rem 0px 4rem;
  flex-direction: column;
  //  background-color: green;
`;

export const CateTitle = styled.div`
  width: 100%;
  font-size: 1.6rem;
  align-items: center;
  font-weight: 500;
  // background-color:blue;
`;

export const CateBox = styled(Row)`
  height: 100%;
  //   background-color: blue;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 24px 0px;
`;

export const CateCard = styled(Col)`
  height: 150px;
  width: 120px;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 24px;
`;

export const CateImg = styled.img`
  width: 100px;
  height: 70px;
  object-fit: contain;
`;

export const CateCardTitle = styled.div`
  //  background-color: yellow;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

export const CateCardContent = styled.div`
  //  background-color: yellow;
  text-align: center;
  color: #adadad;
  font-size: 0.75rem;
`;
