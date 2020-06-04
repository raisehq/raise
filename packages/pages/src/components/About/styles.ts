import styled from 'styled-components';
import { Button } from '@raisehq/components';
import { device } from '../../commons/breakpoints';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ${device.laptop} {
    width: 100%;
    max-width: 1172px;
    padding: 10px;
    margin: auto;
  }
`;

export const AboutTitle = styled.div`
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  color: #8a8e97;
  margin-bottom: 50px;
  margin-top: 30px;
  align-self: center;
  @media screen and ${device.laptop} {
    align-self: flex-start;
  }
`;

export const AboutInformation = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  margin-left: 20px;
  margin-right: 20px;
  &&& h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    margin-top: 50px;
  }

  @media screen and ${device.laptop} {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const TeamTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-top: 50px;
  color: #8a8e97;
  margin-bottom: 20px;
  margin-left: 20px;
  align-self: flex-start;
  @media screen and ${device.laptop} {
    margin-left: 0px;
  }
`;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const TeamMemberItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  width: 140px;
  height: 210px;
  margin-top: 22px;
  margin-right: 30px;
  justify-content: center;

  @media (max-width: ${size.mobileL}) {
    margin-right: 5px;
  }
`;

export const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamMemberItemPhoto = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 80px;
`;

export const TeamMemberPosition = styled.div`
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  color: #5a5a5a;
`;

export const TeamMemberName = styled.div`
  font-family: Lato;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const TeamInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 58px;
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const TeamListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  @media (max-width: ${size.mobileL}) {
    width: 290px;
  }
`;

export const JoinButton = styled(Button)``;

export const ButtonWrapper = styled.div`
  width: 290px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
