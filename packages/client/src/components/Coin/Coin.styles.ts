import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

interface CoinBoxProps {
  pxWidth?: string | null | undefined;
  pxHeight?: string | null | undefined;
}

export const CoinImage = styled(Image)``;

export const CoinBox = styled('div')<CoinBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eeb345;
  font-weight: bold;
  font-size: 14px;
  & > ${CoinImage} {
    width: ${({ pxWidth }) => pxWidth || '24px'};
    height: ${({ pxHeight }) => pxHeight || '24px'};
  }
  & > div:last-child {
    margin-left: 6px;
  }
`;
