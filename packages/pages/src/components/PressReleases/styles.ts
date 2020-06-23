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
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  min-height: 250px;
  @media (max-width: ${size.mobileM}) {
    padding-bottom: 80px;
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
