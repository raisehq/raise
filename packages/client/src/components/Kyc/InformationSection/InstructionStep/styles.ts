import styled from 'styled-components';

export const NumberWrapper = styled.div`
  height: 24px;
  background: #fef2d5;
  border-radius: 15px;
`;

export const AccordionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 831px;

  span {
    width: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
  }
`;

export const AccordionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-left: 15px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  max-width: 800px;
  color: #8a8e97;
`;
