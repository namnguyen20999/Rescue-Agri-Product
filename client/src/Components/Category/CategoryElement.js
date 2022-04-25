import styled from 'styled-components';

export const CateContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: left;
  align-items: center;
  padding: 48px 64px 0px 64px;
  flex-direction: column;
`;

export const CateTitle = styled.div`
  width: 100%;
  font-size: 1.6rem;
  align-items: center;
  font-weight: 500;
`;

export const CateBox = styled.div`
  height: 200px;
  //   background-color: blue;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
`;

export const CateCard = styled.div`
  height: 150px;
  width: 10%;
  background-color: ;
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const CateImg = styled.img`
  //  background-color: green;
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
