import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 600px;

  margin: 100px;

  @media (max-width: ${size.mobileL}) {
    justify-content: center;
    align-items: center;
    margin: 30px;
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

  @media (max-width: ${size.mobileM}) {
    padding: 0 25px;
  }
`;

export const RowGraph = styled(Row)`
  position: absolute;
  top: 10%;
  min-width: 700px;

  @media (max-width: 750px) {
    position: unset;
    top: 0;
    min-width: 0;
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

  @media (max-width: ${size.mobileL}) {
    font-size: 48px;
    line-height: 56px;
    width: 100%;
    padding-left: 0;
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

  @media (max-width: ${size.mobileL}) {
    font-size: 16px;
    line-height: 24px;
    padding: 0;
    max-width: 330px;
  }
`;

export const OldGraphWrapper = styled.div`
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

export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 700px;

  @media (max-width: 750px) {
    min-width: 0;
  }
`;
