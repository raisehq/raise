import styled from 'styled-components';
import { Button } from '@raisehq/components';

export const SignupButton = styled(Button)`
  &&& {
    margin-left: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

export const LinkContainer = styled.div`
{
  button {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  color: #8a8e97;
  padding: 15px;
  }
  
`;

export const MobileLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`;

export default SignupButton;
