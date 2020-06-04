import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

interface CopyButtonProps {
  copied: boolean;
}

export const ReferralContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);
  border-radius: 4px;
`;

export const ReferralSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const ReferralSubSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  padding: 10px 10px 10px 0;

  color: #eb3f93;
`;

export const ReferralText = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  width: 254px;

  color: #8a8e97;
`;

export const LabelSection = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #8a8e97;

  padding-bottom: 10px;
`;

export const CopyButton = styled(Button)<CopyButtonProps>`
  &&& {
    width: 48px;
    height: 48px;
    background: ${({ copied }) => (copied ? '#00A76F' : '#eb3f93')};
    border-radius: 4px;
  }

  i {
    color: #ffffff;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 115px;
`;

export const SocialMedia = styled(Button)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #d8d9dc;
    box-sizing: border-box;

    &&& > .icon {
      color: #b1b3b9;
      margin: 0;
    }
  }
`;

export const InputTextCustom = styled(Input)`
  &&& {
    border-radius: 4px;
    height: 48px;
    width: 345px;
    padding-right: 15px;

    @media (max-width: ${size.mobileL}) {
      width: 248px;
    }
  }

  &&&.ui.disabled {
    opacity: 1;
  }

  &&&.ui.input > input {
    background: #f5f5f5;
    color: #8a8e97;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    border: none;
  }
`;

export const TotalInput = styled(InputTextCustom)`
  &&& {
    width: 167px;
  }
`;

export const TotalNumber = styled.div`
  position: absolute;
  right: 25px;
  top: 8px;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #eb3f93;
`;
