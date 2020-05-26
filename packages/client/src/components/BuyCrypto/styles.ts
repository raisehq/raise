import styled from 'styled-components';
import { device } from '../../commons/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  @media screen and ${device.laptop} {
    width: 100%;
    padding: 30px 25px 50px 300px;
    margin: auto;
    margin-top: 54px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 400px;
  max-width: 540px;
  border: 1px solid black;
`;

export const CryptoProvider = styled.div`
  width: 500px;
  height: 485px;
  background-color: gray;
`;

export const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  color: #eb3f93;
  width: 100%;
  padding: 15px 0;
`;

export const SubTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #8a8e97;
  padding: 15px 0 40px 0;
`;

export const NumberWrapper = styled.div`
  height: 24px;
  background: #fef2d5;
  border-radius: 15px;
`;

export const InstructionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 540px;
  padding: 10px 0;

  span {
    width: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
  }
`;

export const InstructionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-left: 15px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  max-width: 800px;
  color: #8a8e97;
`;

export const InstructionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InstructionBoxTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #8a8e97;
`;

export const InstructionBoxSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`;

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  flex-wrap: wrap;
  width: 100%;
`;

export const PaymentProviders = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export const PaymentDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  max-width: 400px;

  color: #8a8e97;
`;

export const PaymentImage = styled.img`
  margin: 5px;
  width: 45px;
`;
