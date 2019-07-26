import styled from 'styled-components';
import { Card, Grid, Button, Image } from 'semantic-ui-react';
import { match, ANY } from 'pampy';

interface PropsPathname {
  pathname: string;
}

const depositWidth = pathname =>
  match(
    pathname,
    '/deposit',
    () => '512px',
    '/verify-web3',
    () => '512px',
    ANY,
    () => '1200px'
  );

export const ContainerWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 2em 8em;
`;

export const CardSized = styled(Card)`
  &&& {
    height: 570px;
    width: 512px;
  }
`;
export const GridSized = styled(Grid)`
  &&& {
    height: 100vh;
  }
`;
export const CenteredContainerStyled = styled('div')<PropsPathname>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ pathname }) => depositWidth(pathname)};
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
