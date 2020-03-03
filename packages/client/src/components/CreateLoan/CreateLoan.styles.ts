import styled from 'styled-components';
import {
  Select,
  Checkbox,
  Card,
  Header as HeaderUI,
  Button,
  ButtonProps,
  Divider as DividerUI,
  HeaderProps,
  DividerProps
} from 'semantic-ui-react';
import { device, size, maxDevice } from '../../commons/breakpoints';
import theme from '../../theme';

interface LoanFormValueProps {
  big?: boolean;
  alignment: string;
  isMobile: boolean;
}

interface LoanFormInfoProps {
  alignment: string;
  isMobile: boolean;
}

export const LoanTermsCheckbox: any = styled(Checkbox)`
  &&& {
    position: relative;
    margin-right: 4px;
    top: 3px;
    font-size: 12px;
    line-height: 21px;
    color: red;
    @media ${device.laptop} {
      font-size: 14px;
    }
  }
`;

export const CheckContainer = styled.div`
  line-height: 20px;
  margin-top: 20px;
  display: flex;

  @media ${device.mobileS} {
    color: #5a5a5a;
    font-family: Lato;
    font-size: 12px;
    line-height: 21px;
  }
`;

export const Header = styled(HeaderUI)<HeaderProps>`
  && {
    color: #3c4251;
  }
`;

export const TopHeader = styled(HeaderUI)<HeaderProps>`
  && {
    color: #3c4251;
    max-width: 300px;
    font-size: 22px;
    @media ${device.laptop} {
      font-size: 26px;
    }
  }
`;

export const Divider = styled(DividerUI)<DividerProps>`
  &&&&& {
    border-top: none;
    border-bottom: 1px solid #9498a0;
  }
`;
export const LoanCoinSelect = styled(Select)`
  height: 30px;
  min-width: 70px !important;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 145px;
`;

export const LoanSelect = styled(Select)`
  padding: 20px !important;

  i {
    top: auto !important;
  }
`;

export const LoanDescription = styled.div`
  box-sizing: border-box;

  @media ${device.laptop} {
    max-width: 396px;
  }
`;

export const LoanBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
  background: none;
  padding: 30px 0px;
  position: relative;
`;

export const LoanContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const LoanForm = styled.div`
  max-width: 100%;
  width: 100%;
  height: fit-content;
  box-shadow: ${theme.shadow};
  box-sizing: border-box;
  padding: 30px 16px;
  background: #fff;
  font-size: 16px;
  & ${LoanBox}:first-child {
    padding: 0px 0px 30px 0px;
  }
  @media ${device.laptop} {
    max-width: 735px;
    font-size: 14px;
    padding: 40px 50px 50px;
    background: #fff;
  }
`;

export const LoanFormInput = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  @media ${device.laptop} {
    margin-top: 60px;
    width: unset;
  }
`;

export const LoanFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: green;
`;

export const LoanAmountRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: gray;
  align-items: center;
  height: 100%;
`;

export const LoanAmountGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
`;

export const LoanTerm = styled(LoanBox)`
  & ${LoanFormInput} {
    margin-top: 47px;
    display: block;
    width: 100%;
  }
  &&&& ${LoanSelect} {
    display: block;
    width: 100%;
  }
  @media ${device.laptop} {
    & ${LoanFormInput} {
      max-width: 180px;
    }
    &&&& ${LoanSelect} {
      max-width: 180px;
    }
  }
`;

export const LoanDescriptionLowerAmount = styled(LoanDescription)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
  & ${Header}:first-child {
    font-size: 1.07142857rem;
    flex: 1.6;
  }
  & ${LoanFormInput} {
    flex: 1;
  }
  @media ${device.laptop} {
    max-width: unset;
    width: 100%;
    & ${Header}:first-child {
      max-width: 396px;
      font-size: 1.28571429rem;
      flex: unset;
    }
    & ${LoanFormInput} {
      margin-top: 0px;
      flex: unset;
    }
  }

  @media ${maxDevice.mobileL} {
    margin-top: 30px;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media ${device.laptop} {
    margin-top: 36px;
    & .slider {
      order: 1;
    }
  }
`;

export const LoanFormContainer = styled.div`
  margin-bottom: 8px;
`;

export const LoanConfirmation = styled(Card)`
  &&& {
    position: sticky;
    left: 0px;
    bottom: 0px;
    height: fit-content;
    width: 100%;
    padding: 30px 20px 20px 20px;
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);

    @media ${device.mobileS} {
      padding: 20px 15px 10px 15px;
      z-index: 2;
    }
  }

  @media ${device.laptopM} {
    &&& {
      box-shadow: none;
      border-top: 1px solid black;
      border-radius: 0;
      position: relative;
      margin-top: 0px;
      top: 0px;
      width: 100%;
      max-width: 735px;
      padding: 50px;
    }
  }

  @media (min-width: ${size.laptop}) and (max-width: ${size.laptopL}) {
    &&& {
      box-shadow: none;
      border-top: 1px solid black;
      border-radius: 0;
      position: relative;
      margin-top: 0px;
      top: 0px;
      width: 100%;
      max-width: 735px;
      padding: 50px;
    }
  }

  @media ${device.laptopXL} {
    &&& {
      border-radius: 4px;
      box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
      border-top: 0;
      max-width: 340px;
      margin-left: 35px;
    }
  }
`;

export const LoanResume = styled.div`
  position: relative;
  padding: 0px;
  display: flex;
  justify-content: space-between;

  & .divider.vertical::before {
    height: calc(100%);
  }

  & .divider.vertical::after {
    height: calc(100%);
  }

  @media (min-width: ${size.laptop}) and (max-width: ${size.laptopL}) {
    & .divider.vertical {
      display: none;
    }
  }

  @media ${device.laptopXL} {
    justify-content: center;
    flex-direction: column;
    & .divider.vertical {
      display: none;
    }
  }
`;

export const LoanFormInfo = styled('p')<LoanFormInfoProps>`
  text-align: ${({ isMobile, alignment }) => (isMobile ? alignment : 'right')};
  font-size: 12px;
  margin: 0;

  @media ${maxDevice.mobileL} {
    color: #5a5a5a;
    font-family: Lato;
    font-size: 12px;
    line-height: 21px;
  }
`;

export const LoanFormValue = styled('p')<LoanFormValueProps>`
  text-align: ${({ isMobile, alignment }) => (isMobile ? alignment : 'right')};
  font-size: ${({ big }) => (big ? '26px' : '18px')};
  margin: 0px 0px 17px 0px;

  &.bold {
    font-weight: bold;
  }

  @media ${maxDevice.mobileL} {
    margin: 0;
    color: #3c4251;
    font-family: Lato;
    line-height: 24px;
  }
`;

export const InputDescription = styled.div`
  font-size: 14px;
  font-family: Lato;
  @media ${device.laptop} {
    min-width: 190px;
    margin-right: 24px;
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const LoanInputBox = styled.div`
  border-bottom: 1px solid #90a1b5;
  background-color: #eff4f7;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    max-width: 140px;
    border: none !important;
    margin-right: 5px;
    box-sizing: border-box;
    background: none !important;
    font-size: 26px;
    font-weight: bold;
    color: #5c5d5d;
    text-align: right;
  }
  @media ${device.laptop} {
    justify-content: flex-end;
    max-width: 200px;
  }
`;

export const NewLoanAnchor = styled.div`
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  color: #00a76f;
  font-size: 14px;
  font-weight: bold;
`;
export const LoanAmountBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background: none;
  padding: 30px 0px;
  position: relative;

  & ${LoanInputBox}:first-child {
    margin-top: 10px;
  }
  @media ${device.laptop} {
    & ${LoanInputBox}:first-child {
      margin-top: 10px;
    }
  }
`;

export const LoanInputLabel = styled.div`
  font-size: 14px;
  text-align: right;
  font-weight: bold;
  margin-top: 2px;
  text-align: center;
  & > p {
    font-weight: normal;
    font-size: 12px;
  }
  @media ${device.laptop} {
    text-align: right;
  }
`;

export const LoanAmountLabel = styled.div`
  font-size: 14px;
  text-align: right;
  font-weight: bold;
  margin-top: 2px;
  text-align: center;

  @media ${device.laptop} {
    text-align: right;
  }
`;

export const MininumLoanSelect = styled(LoanSelect)`
  &&&& {
    min-width: 120px;
  }
`;

export const LoanCheckbox = styled(Checkbox)`
  &&&&&& label:before {
    background: #3c4251;
  }
  &&&&&&.checked label:before {
    background: linear-gradient(180deg, #39b54a 0%, #34aa44 100%);
  }
`;

export const InterestCard = styled.div`
  height: 48px;
  width: 200px;
  border-radius: 4px;
  background-color: white;
  color: #495b70;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media ${device.laptop} {
    margin: unset;
    order: 2;
    font-weight: bold;
    border: 1px solid #9398a0;
  }
`;

export const ConfirmButton: any = styled(Button)<ButtonProps>`
  &&&&& {
    height: 60px;
    width: 100%;
    background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
    border-radius: 6px !important;
    color: #ffffff;
    padding: 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    margin: 20px 0px 0px 0px;
    :disabled {
      background-color: #00a76f;
      opacity: 0.4;
    }
    @media ${maxDevice.mobileL} {
      height: 48px;
      font-size: 14px;
      line-height: 21px;
      border-radius: 4px !important;
    }
  }
`;

export const WaitingButton: any = styled(ConfirmButton)`
  &&&&&& {
    background: #eff4f7;
  }
`;

export const SideInfo = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  color: #5a5a5a;
  margin-top: 20px;
  font-size: 12px;
  @media ${device.laptop} {
    order: 3;
    text-align: right;
  }
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

/*************************** NEW DESIGN  *************************************/

export const LoanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5% 0;
`;

export const LoanDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LoanControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;

  @media ${maxDevice.mobileL} {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
  }
`;

export const LoanControlsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding-top: 5px;
  padding-left: 5px;
  flex: 0 1 45%;

  @media ${maxDevice.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex: 0 1 100%;
  }
`;

export const LoanFormLabel = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  text-align: right;
  font-weight: bold;
  margin-top: 2px;
  text-align: center;
`;

export const LoanInputCoin = styled(LoanInputBox)`
  padding-top: 4px;
`;

/*************************** LAST DESIGN  *************************************/
export const CreateLoanWrapper = styled.div`
  box-shadow: ${theme.shadow};
  box-sizing: border-box;
  padding: 16px 30px;
  width: 100%;

  @media ${device.laptop} {
    max-width: 735px;
    font-size: 14px;
    background: #fff;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CreateLoanRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const CreateAmountSubSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 177px;
  padding-bottom: 20px;
`;

export const CreateLoanColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 79px;
  padding-right: 15px;
`;

export const SectionTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #3c4251;
`;

export const ControlLabel = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 138.27%;
  display: flex;
  align-items: center;
  color: #8a8e97;
`;

export const MinimumAmountControlLabel = styled(ControlLabel)`
  align-items: flex-end;
  font-size: 16px;
  padding: 10px 0;
`;

export const CreateLoanDescription = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #5a5a5a;
`;

export const CreateLoanSection = styled(Section)`
  height: 121px;
  margin: 35px 0 40px 0;
`;

export const CreateAmountSection = styled(Section)`
  min-height: 177px;
  margin: 35px 0 40px 0;
  justify-content: flex-start;
`;

export const CreateLoanHeader = styled.div`
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
