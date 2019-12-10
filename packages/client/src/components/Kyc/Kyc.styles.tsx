import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const KYCWrapper = styled.div`
  width: 100%;
    padding: 0 20px 25px 20px;
  box-sizing: border-box;
`;

export const KYCHolder = styled.div`
  background: #ffffff;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
`;

export const KYCDisclaimer = styled.p`
  font-size: 16px;
`;

export const Title = styled(Header)`
  text-align: center;
`;
