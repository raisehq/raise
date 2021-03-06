import styled from 'styled-components';
import { match, _ } from 'pampy';
import { Button, Icon, Input } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';
import { KycStatus } from '../../commons/kycStatus';

export const Main = styled.div`
  color: rgba(90, 90, 90, 1);
  background: white;
  border-radius: 4px;
  margin: 0px 0px;

  h1,
  h2,
  h3 {
    color: rgba(60, 66, 81, 1);
  }

  h1:first-child {
    margin-bottom: 19px;
  }

  h3 {
    margin-bottom: 4px;
  }

  @media screen and ${device.tablet} {
    max-width: 1172px;
    margin: auto;
    padding: 0px 10px;
    margin-top: 64px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media screen and ${device.laptop} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const MyActivityWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const Side = styled.div`
  width: 100%;

  @media screen and ${device.laptop} {
    width: 347px;
  }
`;

export const Line = styled.div`
  display: none;
  height: 400px;
  width: 1px;
  margin: 0px 7vh;
  background: rgba(209, 210, 214, 1);

  @media screen and ${device.laptop} {
    display: block;
  }
`;

export const KYCIcon = styled(Icon)`
  &&&& {
    margin-left: 6px;
  }
  color: ${({ value }: any) =>
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

export const EmailBox = styled.div`
  padding: 4px;
  background-color: rgba(245, 245, 245, 1);
  p:first-child {
    margin-bottom: 4px;
  }
`;

export const ReadTitle = styled.p`
  font-size: 12px;
  margin-bottom: 4px;

  & + p {
    margin-bottom: 19px;
  }
`;

export const Label = styled.p`
  margin-top: 24px;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const Submit = styled(Button)`
  &&&& {
    width: 155px;
    padding: 17px;
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 300;
    border-radius: 4px;
    background-color: rgba(0, 167, 111, 1);
    margin: 30px 20px 30px 0px;
  }

  &&&&&&&&&:disabled,
  &&&&&&&.disabled {
    opacity: 0.4 !important;
  }
`;

export const Message = styled.div`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ReferralWrapper = styled.div`
  padding-bottom: 50px;
`;
