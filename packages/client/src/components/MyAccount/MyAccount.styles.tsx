import styled from 'styled-components';
import { Icon, Input } from 'semantic-ui-react';
import { device } from '../LayoutV2/breakpoints';
import { match, _ } from 'pampy';
import { KycStatus } from '../../commons/kycStatus';

export const Main = styled.div`
  padding: 20px;
  background: white;
  border-radius: 4px;
  margin: 0px 0px;

  @media screen and ${device.laptopS} {
    margin: 0px 20vh;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and ${device.laptopS} {
    justify-content: space-between;
  }
`;

export const Side = styled.div`
  width: 260px;
`;

export const Line = styled.div`
  display: none;
  height: 300px;
  width: 1px;
  margin: 0px 10px;
  background: rgba(209, 210, 214, 1);

  @media screen and ${device.laptopS} {
    display: block;
  }
`;

export const KYCIcon = styled(Icon)`
  &&&& {
    margin-left: 6px;
  }
  color: ${value =>
    match(
      value,
      KycStatus.Completed,
      () => 'rgba(0,218,158,1)',
      KycStatus.Pending,
      () => 'rgba(249,188,46,1)',
      KycStatus.Validating,
      () => 'rgba(249,188,46,1)',
      KycStatus.Uncompleted,
      () => 'red',
      KycStatus.Error,
      () => 'red',
      _,
      () => 'red'
    )};
`;

export const FormInput = styled(Input)`
  width: 100%;
`;
