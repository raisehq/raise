import styled from 'styled-components';
// eslint-disable-next-line
import { Card, Grid, Button, Image, Dimmer } from 'semantic-ui-react';
import { match, ANY } from 'pampy';
import { getImages } from '../../utils';
import { maxDevice, device } from '../../commons/breakpoints';

interface PropsPathname {
  pathname: string;
}

const depositWidth = (pathname) => match(pathname, ANY, () => '1200px');

const backgroundImage = getImages('pattern-fdesk-dark.svg');

export const AllRights = styled.span``;
export const LeaveFeedback = styled.a``;

export const SpecialDimmer = styled(Dimmer)`
  &&&& {
    background: white;
  }
`;

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
/* eslint-disable */
export const CardContent = styled(Card.Content)`
  &&&& {
    border: none !important;
    border-top: 0 !important;
    margin: 0px;
    @media ${device.tablet} {
      margin: ${({ bottom_spacing: bottomSpacing }) => {
        const resp = bottomSpacing
          ? '0 2.5em 2.5em 2.5em !important;'
          : '0 2.5em 0em 2.5em !important;';
        return resp;
      }};
    }
  }
`;
/* eslint-enable */
export const CardSized = styled(Card)`
  &&& {
    height: 100%;
    width: 100%;
    box-shadow: none;
    @media ${device.tablet} {
      height: auto !important;
      width: 500px;
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

export const Content = styled.div`
  box-sizing: border-box;
  margin: 0 auto;

  @media ${maxDevice.laptop} {
    width: 100%;
    padding: 30px 25px 50px 25px;
  }
`;

export const ContentBorrower = styled.div`
  padding: 40px 15px 155px 15px;
  padding-bottom: 155px;
  box-sizing: border-box;
  margin: 0 auto;

  @media ${maxDevice.laptop} {
    width: 100%;
    padding: 30px 25px 50px 25px;
    margin: 0 auto;
  }
`;

export const ContentKyc = styled.div`
  background-color: white;
  padding-top: 50px;

  @media ${maxDevice.laptop} {
    width: 100%;
    padding: 30px 25px 50px 25px;
    margin: 0 auto;
  }
`;

export const OnboardingContent = styled(Content)`
  @media ${maxDevice.laptop} {
    padding: 30px 25px 50px 25px;
  }
`;

export const Wrapper = styled.div`
  width: auto;
  min-height: 800px;
  background: #fff;

  @media screen and ${maxDevice.mobileL} {
    background: none;
  }
`;

export const ContentMain = styled.div`
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
