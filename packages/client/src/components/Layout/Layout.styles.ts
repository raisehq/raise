import styled from 'styled-components';
import theme from '../../theme';
import { maxDevice } from '../LayoutV2/breakpoints';

export const HeroLayout = styled('div')`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: auto;
  /* display: flex;
  justify-content: center;
  padding-bottom: 60px; */
  background: url(${theme.resources}/images/img_bkblue.svg) center right no-repeat,
    url(${theme.resources}/images/img_bkgreen.svg) 0 70% no-repeat,
    url(${theme.resources}/images/img_curve.svg) bottom center no-repeat;
`;

export const Content = styled.div`
  width: 1172px;
  padding-top: 75px;
  padding-bottom: 155px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${maxDevice.laptop} {
    width: 100%;
    padding: 75px 25px 50px 25px;
  }
`;

export const Separator = styled('div')`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: #ffffff;
`;
