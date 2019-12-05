import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

export const WarningBanner = styled.div`
  height: 70px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9bc2e;
  color: #3c4251;
  font-size: 14px;
  @media ${device.laptop} {
    font-size: 17px;
    font-weight: bold;
  }
`

export const VerifyButton = styled(Button)`
&&& {
  color: #3c4251;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content; center;
  .icon {
    margin-left: 3px;
  }
  margin-left: 10px;
  font-size: 14px;
  @media ${device.laptop} {
    font-size: 17px;
  }
}
`
export const BlackFill = styled.div`
  background: #3c4251;
  height: 14px;
  width: 5px;
  margin-right: 3px
`

export const WarningSignWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 30px;
  & > div {
    heigth: 100%;
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
`
