import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button, Icon as SemanticIcon } from 'semantic-ui-react';
import { maxDevice, device as minDevice } from '../../commons/breakpoints';

interface WarningProps {
  isMobile?: true;
}

export const WarningBanner: FunctionComponent<WarningProps> = styled.div<WarningProps>`
  height: 70px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9bc2e;
  color: #3c4251;
  font-size: 16px;

  &&&&& > * {
    margin: 0px 8px;
  }

  @media ${minDevice.laptop} {
    font-weight: bold;
  }
  ${({ isMobile }) => {
    if (isMobile) {
      return `
        @media ${minDevice.laptop} {
          display: none;
        }
      `;
    }
    return `
      @media ${maxDevice.laptop} {
        display: none;
      }
    `;
  }}
`;

export const Icon = styled(SemanticIcon)`
  &&&&& {
    height: 15px;
    color: #3c4251;
    width: 14px;
    font-size: 19px;
    font-weight: 100;
  }
`;

export const VerifyButton = styled(Button)`
&&&&&&&&&& {
  color: #3c4251;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content; center;
  font-size: 16px;
  font-weight: normal;
  padding: 13px 11px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.16);

  &:hover {
    background: #f7f7f7;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.45);
  }

  .icon {
    margin: 0;
    margin-left: 10px;
  }
}
`;
export const BlackFill = styled.div`
  background: #3c4251;
  height: 14px;
  width: 5px;
  margin-right: 3px;
`;

export const WarningSignWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 30px;
  height: 34px;
  & > div {
    height: 34px;
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    display: block;
    font-size: 22px;
    width: 30px;
  }
`;

export const WarningLink = styled.div`
  color: #00ad63;
  cursor: pointer;
`;
