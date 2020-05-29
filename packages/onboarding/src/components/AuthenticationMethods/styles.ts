import styled from 'styled-components';
import theme from '../../theme';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const CenteredAlert = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const ChooseMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${size.mobileL}) {
    min-height: 0;
  }
`;

export const ChooseMethodButtonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 180px;
`;

export const OnboardButton = styled.button`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
  border-radius: 4px;
  border: none;
  background: ${theme.gradient.green};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  cursor: pointer;

  :disabled {
    opacity: 0.4;
  }
`;

export const ChooseMethodButton = styled(OnboardButton)`
  width: 85%;
`;

export const ChooseBloomMethodButton = styled(ChooseMethodButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: white;
  color: #6067f1;
  border: 1px solid #6067f1;

  img {
    margin-left: 8px;
  }
`;

export const ChooseMethodSubtitleWrapper = styled.div`
  margin: 2%;
  text-align: center;
  font-size: 23px;
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ChooseMethodSubTitle: any = styled.div`
  font-size: 23px;
  line-height: 36px;
  opacity: 0.59;
  color: #3c4251;
  font-family: Lato;
  height: 72px;
  width: 210px;
  margin: 5%;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;
