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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${size.mobileM}) {
    width: 100%;
  }
  @media (max-width: ${size.mobileL}) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  justify-content: flex-end;
  align-items: flex-start;
  height: 500px;
  width: 550px;

  img {
    position: absolute;
    left: 0%;

    @media (max-width: ${size.mobileL}) {
      width: 355px;
      left: 5%;
    }
    @media (max-width: 1370px) {
    }
  }
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    height: 280px;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ControlWrapper = styled.div`
  padding: 0 0 50px 0;
`;

export const SpecialRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: ${size.mobileL}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 43%;

  padding-top: 50px;
  @media (max-width: ${size.mobileL}) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 1370px) {
    width: 100%;
    align-items: center;
  }
`;

export const CheckLoanText = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;

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
  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const IconWrapper = styled.span`
  padding-top: 3px;
`;
