import styled from 'styled-components';
import { Select, Checkbox } from 'semantic-ui-react';
import theme from '../../theme';

export const BloodWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .first {
    padding-top: 90px;
  }

  .content {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 50px;
    height: auto;
    background: none;
    position: relative;
  }

  .separator {
    padding-top: 50px;
    margin-bottom: 80px;
    box-sizing: border-box;
  }

  .lone {
    flex: 0 1 350px;
    margin: 40px;
  }
`;

export const BloodCardMain = styled.div`
  height: 100%;
  box-shadow: ${theme.shadow};
  padding-top: 70px;
  flex: 0 1 60%;
  background: #fff;
  padding: 40px;
  box-sizing: border-box;
`;

export const BloodCardContent = styled.div`
  flex: 0 1 60%;
  background: #fff;
  box-sizing: border-box;
  align-self: flex-start;
`;

export const BloodCardFloat = styled.div`
  flex: 0 1 40%;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  align-self: flex-start;
  margin-top: 40px;
`;

export const CreateLoanInput = styled.div`
  width: 80%;
  float: right;
  position: relative;
  border-bottom: 1px solid #90a1b5;

  input {
    width: 100%;
    border: none !important;
    padding-right: 42px;
    box-sizing: border-box;
    background: none !important;
    font-size: 26px;
    color: #5c5d5d;
    text-align: right;
  }
`;

export const DAILogo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 14px;
  top: 4px;

  .icon {
    color: #febe44 !important;
  }

  ::before {
    content: 'DAI';
    position: absolute;
    top: 3px;
    right: -17px;
  }
`;

export const CreateLoanInputLabel = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  font-size: 14px;
`;

export const CreateLoanSelect = styled(Select)`
  float: right;
  padding: 20px !important;

  i {
    top: auto !important;
  }
`;

export const CreateLoanCheckbox = styled(Checkbox)`
  float: right;
`;

export const InterestCard = styled.div`
  height: 48px;
  width: 200px;
  border-radius: 4px;
  background-color: #efecfa;
  color: #495b70;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`;

export const LoanCreationReview = styled.div`
  text-align: right;
  position: relative;
  color: #939cac;

  .title {
    font-size: 14px;
  }

  .subtitle {
    font-size: 12px;
  }

  .info {
    color: #5c5d5d;
    font-weight: bolder;
    font-size: 18px;
    font-weight: bolder;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .reviewBlock {
    margin-bottom: 30px;
    padding-top: 30px;
  }

  .border {
    border-top: 1px solid #efecfa;
  }

  .main {
    color: #6851d8;
    margin-bottom: 30px;
    font-size: 26px;
  }

  button:disabled {
    opacity: 0.5;
  }
`;

export const ConfirmButton: any = styled.button`
  height: 60px;
  width: 310px;
  border-radius: 4px;
  background-color: #6851d8;
  border: none;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SideInfo = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
  color: #5A5A5A;
  font-size: 12px;
`;

export const InputError = styled.div`
  color: ${theme.colors.error};
`;

export const MinAmount = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;

  p {
    margin-right: 15px;
    position: relative;
    top: 5px;
  }
`;
