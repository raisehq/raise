import styled from 'styled-components';
import { Button, List, Loader, Label, Grid, Icon } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

interface LabelPaddingProps {
  color?: string;
}

export const LenderButton = styled(Button)`
  &&& {
    cursor: pointer;
    color: white;
    background-color: #eb3f93;
    text-transform: uppercase;
    border-radius: 4px;
    height: 56px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    margin-top: auto;
    margin: 0px;
  }

  &&&:hover {
    color: white;
    background-color: #eb3f93;
  }
  &&&:disabled,
  &&&.disabled {
    cursor: default;
    opacity: 0.45 !important;
    background-image: unset !important;
    background: lightgray;
    box-shadow: none !important;
    pointer-events: none !important;
  }
`;

export const BorrowerButton = styled(LenderButton)`
  &&& {
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    &&&:hover {
      color: white;
      background: linear-gradient(134.72deg, #02bb7d 0%, #00efad 100%);
    }
  }
`;

export const Header = styled.h2`
  color: #3c4251;
  font-family: Lato;
  font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  margin-top: 20px;
`;

export const ListItemPadding = styled(List.Item)`
  &&& {
    font-size: 18px;
  }
  &&&:first-child {
    margin-bottom: 25px;
  }
`;

export const LabelPadding = styled(Label)<LabelPaddingProps>`
  &&& {
    font-size: 14px !important;
    margin-right: 8px !important;
    background-color: ${({ color }) => color || '#ff047f'};
    color: #ffffff;
  }
`;
export const IconSuccess = styled(Icon)`
  &&& {
    margin: 0 !important;
  }
`;
export const LabelPaddingLoader = styled(LabelPadding)<LabelPaddingProps>`
  &&& {
    position: relative;
    margin-bottom: -7px;
    background-color: ${({ color }) => color || '#ff047f'};
    color: #ffffff;
  }
`;
export const MicroLoader = styled(Loader)`
  &&& {
    width: 1rem;
    height: 1rem;
    font-size: 0.78571429em;
  }
  &&&:before,
  &&&:after {
    width: 10px;
    height: 10px;
    margin: 2px 0 0 -0.35rem;
  }
`;

export const Action = styled(Grid.Row)`
  color: #3c4251;
  font-size: 18px;
  line-height: 28px;
`;

export const Explanation = styled(Grid.Row)`
  color: #5a5a5a;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
`;

export const ConfirmButton = styled(LenderButton)`
  &&& {
    height: 48px;
    width: 100%;
    font-size: 16px;
    color: #ffffff;
  }
  &&&:hover,
  &&&:focus {
    background-color: #ff047f;
    color: #ffffff;
  }
`;

export const ExitButton = styled(Icon)`
  &&& {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    @media (screen and ${device.tablet}) {
      display: none;
    }
  }
`;
