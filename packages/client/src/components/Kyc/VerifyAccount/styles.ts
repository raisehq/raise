import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 8px 25px rgba(60, 66, 81, 0.25);
  border-radius: 4px;
  width: 348px;
  height: 340px;
  padding: 40px;
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #8a8e97;
`;

export const BloomWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #8a8e97;
`;

export const VerifyWithBloom = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #5c6bf2;

  span {
    padding-right: 10px;
  }
`;
