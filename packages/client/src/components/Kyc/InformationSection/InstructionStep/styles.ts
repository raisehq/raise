import styled from 'styled-components';

export const NumberWrapper = styled.div`
  width: 24px;
  height: 24px;
  background: #fef2d5;
  border-radius: 15px;
`;

export const AccordionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
  }
`;

export const AccordionText = styled.div`
  margin-left: 15px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #8a8e97;
`;
