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
  min-height: 480px;
  @media (max-width: ${size.mobileL}) {
    min-height: 0;
  }
`;

export const GetStartedBloomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const GetStartedBloomTitle = styled.div`
  text-align: center;
  font-size: 50px;
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
  padding-top: 20px;

  span {
    padding: 10px;
  }

  @media (max-width: ${size.mobileL}) {
    padding-top: 0;
  }
`;

export const GetStartedBloomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  flex: 0 1 100%;
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
  padding: 0;
  max-width: 200px;
  @media (max-width: ${size.mobileL}) {
    padding: 0 10% 10% 10%;
    width: 100%;
    max-width: none;
  }
`;

export const FollowingStepsTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 5% 0;
  line-height: 24px;
`;

export const HelpWithBloomWrapper = styled.div<KycStatus>`
  display: flex;
  flex-direction: column;
  padding: 7%;
  max-width: 250px;
  min-height: 250px;
  text-align: center;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
  line-height: 21px;
  background-color: ${props => (props.kycUnsuccessful ? '#6067f1' : 'white')};
  color: ${props => (props.kycUnsuccessful ? 'white' : 'inherit')};
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    max-width: none;
    align-items: stretch;
  }
`;

export const IconWrapper = styled.div`
  align-self: flex-end;
`;

export const BloomParagraph = styled.p`
  color: #6067f1;
`;

export const HelpMessage = styled.div`
  margin-top: 5%;
`;
