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
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: flex-end;
  flex-direction: row-reverse;
`;

export const Text = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  color: #8a8e97;
`;

export const Container = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: flex-end;
  flex-direction: row;

  padding: 10px;
`;
