import styled from 'styled-components';
import { InvestCard as InvestCardWithHooks } from '@raisehq/components';
import { InvestModal } from '../InvestModal';
import { InvestWithSidebar } from '../InvestSidebar';

export const InvestCard = styled(InvestCardWithHooks)``;

export const InvestModalButton = styled(InvestModal)`
  &&&&&& {
    margin-top: 15px;
  }
`;

export const InvestSidebarButton = styled(InvestWithSidebar)`
  &&&&&& {
    margin-top: 15px;
  }
`;
