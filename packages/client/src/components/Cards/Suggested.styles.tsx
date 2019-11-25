import styled from 'styled-components';
import { InvestModal } from '../InvestModal';

import { InvestCardView } from '@raisehq/components';

export const InvestCard = styled(InvestCardView)`
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const InvestButton = styled(InvestModal)`
  &&&&&& {
    margin-top: 15px;
  }
`;
