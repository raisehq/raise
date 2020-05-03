import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

interface KycStatus {
  kycUnsuccessful?: boolean | null;
}

export const ChooseMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${size.mobileL}) {
    min-height: 0;
  }
`;

export const GetStartedBloomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 5%;
`;

export const GetStartedBloomTitle = styled.div`
  text-align: center;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #3c4251;
  @media (max-width: ${size.mobileL}) {
    font-size: 25px;
  }
`;

export const GetStartedBloomSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #6067f1;
  font-size: 18px;
  line-height: 22px;
  padding-top: 8px;

  @media (max-width: ${size.mobileL}) {
    padding-top: 0;
  }
`;

export const GetStartedBloomDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 21px;
  max-width: 620px;
`;

export const GetStartedBloomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  @media (max-width: ${size.mobileL}) {
    flex-wrap: wrap;
    min-height: 0;
  }
`;

export const GetStartedBloomQRSection = styled.div`
  flex: 1 1 100%;
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
  }
`;

export const GetStartedBloomInstructionsSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 5% 0;

  @media (max-width: ${size.mobileL}) {
    align-items: center;
  }
`;

export const GetStartedBloomFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const InstructionsWrapper = styled.div`
  padding-top: 10%;
  max-width: 200px;
  line-height: 21px;
  @media (max-width: ${size.mobileL}) {
    padding: 0 10% 10% 10%;
    width: 100%;
    max-width: none;
  }
`;

export const FollowingStepsTitle = styled.div`
  color: #3c4251;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin: 2% 0;
`;

export const HelpWithBloomWrapper = styled.div<KycStatus>`
  position: absolute;
  top: 500px;
  right: 37%;
  min-height: 107px;

  background: #ffffff;

  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);
  border-radius: 4px;
  padding: 10px;

  .bloomInstructions {
    display: block;
  }

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    max-width: none;
    align-items: stretch;
    right: 0;
    top: 315px;
    z-index: 1000;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 13px;
  right: 2px;
  align-self: flex-end;
  z-index: 100;
  cursor: pointer;
  color: #C5C7CB;
  font-size: 16px;
`;

export const BloomParagraph = styled.p`
  color: #6067f1;

  span {
    font-weight: bold;
  }
`;

export const BloomHelpRaise = styled.span`
  color: #00a76f;
`;

export const HelpMessage = styled.div`
  margin-top: 0;
`;

export const LinkToSumSub = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const SumsubWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 50px;
`;

export const VerifyWithSumsub = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #5c6bf2;

  span {
    color: #213093;
    padding-right: 10px;
  }
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #8a8e97;
`;
