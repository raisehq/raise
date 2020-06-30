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
  padding: 0 20px;

  @media (max-width: ${size.mobileL}) {
    min-width: 400px;
  }
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 72px;
  text-align: center;
  max-width: 660px;

  color: #eb3f93;

  @media (max-width: ${size.mobileL}) {
    font-size: 48px;
    padding-bottom: 40px;
  }
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;

  margin: 100px 20px;

  width: 100%;

  max-width: 1150px;
  min-width: 1000px;

  .slider {
    width: 100%;
  }
`;

export const Slide = styled.div`
  display: flex !important;
  justify-content: center;

  width: 100%;
`;
