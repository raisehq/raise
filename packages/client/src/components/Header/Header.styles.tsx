import styled from 'styled-components';
import { SubHeader, SubPageHeader, TopHeader } from '@raisehq/components';
import RawHeader from './RawHeader';
import { device } from '../../commons/breakpoints';

export const FlexDiv = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and ${device.tablet} {
    justify-content: flex-end;
  }
`;

export const StyledHeader = styled(RawHeader)`
  & ${TopHeader}, & ${SubHeader} > *:first-child,
  & ${SubPageHeader} > *:first-child {
    max-width: 1172px;
    width: 100%;
    margin: 0 auto;
  }
`;
export default StyledHeader;
