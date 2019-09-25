import styled from 'styled-components';
import { Card, Grid, Button, Image } from 'semantic-ui-react';
import { match, ANY } from 'pampy';
import { device } from './breakpoints';
import { getImages } from '../../utils';
import theme from '../../theme';
import { maxDevice } from '../LayoutV2/breakpoints';

interface PropsPathname {
  pathname: string;
}

const depositWidth = pathname =>
  match(pathname, '/deposit', () => '425px', '/verify-web3', () => '425px', ANY, () => '1200px');

const backgroundImage = getImages('pattern-fdesk-dark.svg');

export const AllRights = styled.span``;
export const LeaveFeedback = styled.a``;

export const ContainerWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background: white;
  box-shadow: none;
  @media ${device.tablet} {
    background: #d4e5e8 url(${backgroundImage}) no-repeat fixed bottom/100%;
    padding: 2em 8em;
  }
`;

export const CardContent = styled(Card.Content)`
  &&&& {
    border: none !important;
    border-top: 0 !important;
    margin: 0px;
    @media ${device.tablet} {
      margin: ${({ bottom_spacing }) =>
        bottom_spacing ? '0 2.5em 2.5em 2.5em !important;' : '0 2.5em 0em 2.5em !important;'};
    }
  }
`;

export const CardSized = styled(Card)`
  &&& {
    height: 100%;
    width: 100%;
    box-shadow: none;
    @media ${device.tablet} {
      min-height: 570px;
      height: auto !important;
      width: 425px;
    }
  }
`;
export const GridSized = styled(Grid)`
  &&& {
    height: 100vh;
    margin: 0px;
  }
`;
export const CenteredContainerStyled = styled('div')<PropsPathname>`
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ pathname }) => depositWidth(pathname)};
  }
  .row {
    padding-bottom: 0 !important;
  }
`;
export const Title = styled.div`
  color: #104a50;
  font: 40px bold;
  line-height: 48px;
`;

export const GridLayout = styled(Grid)`
  box-shadow: 0 5px 26px 0 rgba(6, 52, 40, 0.2);
`;

export const HeaderRow = styled(Grid.Row)`
  &&&&& {
    margin: 20px 0px 30px;
    padding: 0px 14px 0px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${device.tablet} {
      padding: 0px;
    }
  }
`;

export const FooterRow = styled(Grid.Row)`
  &&& {
    padding: 16px 0;
    text-align: center;
  }
`;

export const ButtonGreen = styled(Button)`
  &&&,
  &&&:focus {
    height: 62px;
    width: 100%;
    ${({ blocked }) => (blocked ? 'opacity: 0.4 !important;' : '')}
    background:linear-gradient(134.72deg, #188E9B 0%, #6DD7C7 100%);
    color: white;
    font: 18px bold;
    line-height: 24px;
  }
  &&&:hover {
    background: linear-gradient(134.72deg, #5aafb8 0%, #78d8ca 100%);
    color: white;
    font-weith: bold;
  }
  &&&:active {
    background-color: #188e9b;
    color: white;
    font-weith: bold;
  }
`;

export const Href = styled.a`
  color: #00a76f;
  font-family: Lato;
  font-size: 14px;
`;
export const ImageSized = styled(Image)`
  &&& {
    height: 268px;
  }
`;

export const Credits = styled.em`
  font-size: 1em;

  ${LeaveFeedback} {
    display: block;
    margin: 10px 0px 0px 0px;
  }
  ${AllRights} {
    display: block;
    margin: 10px 0px 0px 0px;
  }
  @media ${device.tablet} {
    ${AllRights} {
      display: inline;
    }
  }
`;

export const HeroLayout = styled('div')`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  min-height: 100%;
  width: auto;
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
