import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { device } from '../LayoutV2/breakpoints';

export const Container = styled.div`
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const BorrowerCard = styled(Card)`
  &&& {
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
    padding: 50px 65px 50px 50px;
    width: 100%;
    height: fit-content;
    min-height: 510px;
    @media screen and ${device.laptop} {
      max-width: 715px;
    }
  }
`;

export const SideInfo = styled(Card)`
  &&& {
    padding: 50px;
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
    margin-top: 30px;
    margin-left: 15px;
    height: fit-content;
    min-height: 407px;
    width: 100%;
    @media screen and ${device.laptop} {
      max-width: 350px;
    }
  }
`;
