import styled from 'styled-components';
import { Image, ImageProps } from 'semantic-ui-react';

export const CoinImage = styled(Image)<ImageProps>``;

export const CoinBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eeb345;
  font-weight: bold;
  font-size: 14px;
  & > ${CoinImage} {
    width: 24px;
    height: 24px;
  }
  & > div:last-child {
    margin-left: 10px;
  }
`;
