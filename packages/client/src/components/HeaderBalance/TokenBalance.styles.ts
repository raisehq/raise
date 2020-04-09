import { Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Child = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #8a8e97;
`;

export const Balance = styled.div`
  font-weight: bold;
  margin-left: 3px;
`;

export const TokenName = styled.div`
  font-size: 16px;
`;

export const TokenImage = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

export const IconEye = styled(Icon)`
  color: #d6d8db;
  cursor: pointer;
`;
export const SpanValues = styled.span`
  margin-right: 10px;
`;
