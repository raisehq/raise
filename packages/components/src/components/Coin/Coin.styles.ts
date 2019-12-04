import styled from 'styled-components';
import { Image, ImageProps } from 'semantic-ui-react';

export const CoinImage: any = styled(Image)<ImageProps>``;

export const CoinBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eeb345;
  & > ${CoinImage} {
    width: 18px;
    height: 18px;
  }
  & > div {
    font-weight: bold;
    font-size: 12px;
  }
`;
