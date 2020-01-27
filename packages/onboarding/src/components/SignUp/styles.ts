import styled from 'styled-components';
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  signUp: '860px',
  desktop: '950px'
};
export const MainImage = styled.img`
  display: block;
  width: 82px;
  height: 82px;
`;

export const ErrorImage = styled.img`
  display: block;
  width: 379px;
  height: 237px;
  @media (max-width: ${size.mobileL}) {
    padding: 0%;
  }
`;

export const ConfirmWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px auto;
`;
export const ConfirmHeader = styled.h1`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const ConfirmText = styled.p`
  text-align: center;
  margin-top: 15px;
  color: #5a5a5a;
  font-size: 14px;
  line-height: 21px;
  max-width: 322px;
`;
