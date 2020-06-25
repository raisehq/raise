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
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 20%;
  width: 100%;

  @media (max-width: 1370px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const Container = styled.div`
  position: relative;
  min-height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${size.mobileM}) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 1300px;

  @media (max-width: ${size.mobileL}) {
    padding-left: 5%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
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
  text-align: left;

  @media (max-width: 750px) {
    font-size: 48px;
    line-height: 56px;
    width: 70%;
    padding-left: 0;
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 48px;
    line-height: 56px;
    padding: 10px;
    width: 100%;
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
  @media (max-width: 750px) {
    padding: 10px 0 0 0;
  }
`;

export const GraphWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 32%;
  min-width: 700px;

  @media (max-width: ${size.mobileM}) {
    position: unset;
    top: 0;
    min-width: 0;
  }
  @media (max-width: 750px) {
    position: unset;
    top: 0;
    min-width: 0;
  }
`;
