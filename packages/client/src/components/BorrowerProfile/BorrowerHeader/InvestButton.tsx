import { lazy } from 'react';
import styled from 'styled-components';
import { size } from '../../../commons/breakpoints';

const InvestWithSidebar = lazy(() => import('../../InvestSidebar/InvestWithSidebar'));

const InvestButton = styled(InvestWithSidebar)`
  &&&&&& {
    margin-top: 15px;
    width: 30%;
  }
  @media (max-width: ${size.mobileL}) {
    &&&&&& {
      width: 100%;
    }
  }
`;

export default InvestButton;
