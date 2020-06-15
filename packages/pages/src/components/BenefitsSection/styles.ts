import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  height: 500px;
  width: 18%;
  position: relative;
  img {
    position: absolute;
  }

  @media (max-width: ${size.mobileL}) {
    width: 100%;
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
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  padding-top: 50px;
  @media (max-width: ${size.mobileL}) {
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
