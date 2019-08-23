import styled from 'styled-components';
import { Image, ImageProps } from 'semantic-ui-react';

export const CoinImage = styled(Image)<ImageProps>``;

export const CoinBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EEB345;
  & > ${CoinImage} {
    width: 18px;
    height: 18px;
  }
  & > div {
    font-weight: bold;
    font-size: 12px;
  }
`
