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
  padding-top: 150px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 15%;

  @media (max-width: ${size.mobileL}) {
    padding-left: 5%;
  }
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 72px;
  color: #eb3f93;
  padding: 24px;
  max-width: 600px;

  @media (max-width: ${size.mobileM}) {
    font-size: 48px;
    line-height: 56px;
    padding: 10px;
  }
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
  max-width: 400px;
  padding: 24px;

  @media (max-width: ${size.mobileM}) {
    font-size: 16px;
    line-height: 24px;
    padding: 10px;
    max-width: 330px;
  }
`;

export const GraphWrapper = styled.div``;
