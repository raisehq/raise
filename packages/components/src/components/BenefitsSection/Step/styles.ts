import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 35px 10px;
  height: 100%;
  width: 100%;

  @media (max-width: ${size.mobileL}) {
    padding-left: 0;
  }
`;

export const Number = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 24px;
  text-align: center;
  margin-right: 30px;
  color: #eb3f93;
  height: 45px;
  width: 65px;

  @media (max-width: ${size.mobileL}) {
    padding-left: 15px;
    width: unset;
    margin-right: 18px;
  }
`;

export const Text = styled.div`
  width: 295px;
  height: 72px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;

  @media (max-width: ${size.mobileL}) {
    max-width: 220px;
  }
`;
