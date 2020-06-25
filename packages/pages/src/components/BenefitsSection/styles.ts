import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};
export interface ImageProps {
  visible: true;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 100px;

  @media (max-width: ${size.mobileM}) {
    padding-bottom: 20%;
    margin: 30px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 56px;
  text-align: center;
  padding: 70px;

  color: #eb3f93;

  @media (max-width: ${size.mobileL}) {
    font-size: 48px;
    padding-bottom: 40px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 405px;

  img {
    position: absolute;
    right: -5%;
    width: 100%;
    height: 405px;

    @media (max-width: ${size.mobileL}) {
      width: 355px;
      left: 5%;
      height: unset;
    }
  }

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    align-items: flex-start;
    height: 280px;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  min-height: 380px;
`;

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 0 50px 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 50%;

  padding-top: 50px;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;
export const CheckLoanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 410px;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const CheckLoanText = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: #eb3f93;
  &:hover {
    color: #eb3f93;
  }
`;

export const IconWrapper = styled.span`
  padding-top: 3px;
`;
