import styled from 'styled-components';
import theme from '../../theme';

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
  max-width: 1222px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 55px 25px 125px 25px;
  width: 100%;
`;

export const Separator = styled('div')`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: #ffffff;
`;
