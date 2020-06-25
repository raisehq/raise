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
  align-items: center;

  min-height: 450px;

  margin: 100px;

  @media (max-width: ${size.mobileM}) {
    margin: 30px;
  }
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #eb3f93;
  @media (max-width: ${size.mobileM}) {
    padding: 20px 0;
  }
`;
