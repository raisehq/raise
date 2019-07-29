import styled from 'styled-components';
import { Card, Grid, Button, Image } from 'semantic-ui-react';
import { match, ANY } from 'pampy';
import { device } from './breakpoints';
interface PropsPathname {
  pathname: string;
}

const depositWidth = pathname =>
  match(
    pathname,
    '/deposit',
    () => '425px',
    '/verify-web3',
    () => '425px',
    ANY,
    () => '1200px'
  );

const backgroundImage =
  'https://static.herodev.es/images/pattern-fdesk-dark.svg';

export const ContainerWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background: white;
  box-shadow: none;
  @media ${device.mobileL} {
    background: #d4e5e8 url(${backgroundImage}) no-repeat fixed bottom/100%;
    padding: 2em 8em;
  }
`;

export const CardContent = styled(Card.Content)`
  &&& {
    border-top: none !important;
    margin: 0px;
    @media ${device.mobileL} {
      margin: ${({ bottom_spacing }) =>
        bottom_spacing
          ? '0 2.5em 2.5em 2.5em !important;'
          : '0 2.5em 0em 2.5em !important;'};
    }
  }
`;

export const CardSized = styled(Card)`
  &&& {
    height: 100%;
    width: 100%;
    box-shadow: none;
    @media ${device.mobileL} {
      height: 570px;
      width: 425px;
    }
  }
`;
export const GridSized = styled(Grid)`
  &&& {
    height: 100vh;
    margin: 0px;
    @media ${device.mobileL} {
    }
  }
`;
export const CenteredContainerStyled = styled('div')<PropsPathname>`
  @media ${device.mobileL} {
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ pathname }) => depositWidth(pathname)};
  }
`;
export const Title = styled.div`
  color: #104a50;
  font: 40px bold;
  line-height: 48px;
`;

export const HeaderRow = styled(Grid.Row)`
  &&&&& {
    margin: 20px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  color: #00A76F;
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
`;
