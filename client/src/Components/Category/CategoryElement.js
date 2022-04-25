import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CateContainer = styled.div`
  margin-top: 30px;
`;

export const CateTitle = styled.div`
  width: 100%;
  font-size: 1.6rem;
  align-items: center;
  font-weight: 500;
`;

export const CateBox = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
`;

export const CateCard = styled(Card)`
  overflow: hidden;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const CateImg = styled.img`
  height: 70px;
  object-fit: contain;
`;

export const CateCardTitle = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

export const CateCardContent = styled.div`
  text-align: center;
  color: #adadad;
  font-size: 0.75rem;
`;
