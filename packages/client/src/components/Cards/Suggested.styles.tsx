import styled from 'styled-components';
import { InvestCard as InvestCardWithHooks } from '@raisehq/components';
import { InvestWithSidebar } from '../InvestSidebar';

export const InvestCard = styled(InvestCardWithHooks)``;

export const InvestSidebarButton = styled(InvestWithSidebar)`
  &&&&&& {
    margin-top: 15px;
  }
`;
