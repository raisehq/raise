import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;

  flex-wrap: wrap;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 550px;
  padding: 0 20px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 30px;
`;

export const IconBox = styled(Icon)`
  width: 24px;
  height: 24px;

  color: #f38cbe;
`;

export const TextBox = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  width: 192px;
`;
