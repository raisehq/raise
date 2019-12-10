import styled from 'styled-components';
import { InvestModal } from '../InvestModal';
import { device } from '../../commons/breakpoints';

import { InvestCard as InvestCardWithHooks } from '@raisehq/components';

export const InvestCard = styled(InvestCardWithHooks)`
  margin-right: 15px;
  margin-bottom: 15px;
  
  @media ${device.mobileS} {
     margin-right: 0;
  }

`;

export const InvestButton = styled(InvestModal)`
  &&&&&& {
    margin-top: 15px;
  }
`;
