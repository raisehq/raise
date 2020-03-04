import styled from 'styled-components';
import {
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

interface AmountDescriptionProps {
  bold?: boolean;
  fontSize?: number;
}

export const CheckContainer = styled.div`
  line-height: 20px;
  margin-top: 20px;
  display: flex;
  padding: 5px;

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

export const Divider = styled(DividerUI)<DividerProps>`
  &&&&& {
    border-top: none;
    border-bottom: 1px solid #b1b3b9;
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
    padding: 0 32px;
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
      padding: 30px;
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

export const NewLoanAnchor = styled.div`
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  color: #00a76f;
  font-size: 14px;
  font-weight: bold;
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

/*************************** LAST DESIGN  *************************************/

export const CreateLoanWrapper = styled.div`
  box-shadow: ${theme.shadow};
  box-sizing: border-box;
  padding: 0 30px;
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
  padding-bottom: 10px;
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
  margin: 30px 0 40px 0;
`;

export const CreateAmountSection = styled(Section)`
  min-height: 177px;
  margin: 30px 0 30px 0;
  justify-content: flex-start;
`;

export const CreateLoanHeader = styled.div`
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/*********************** ConfirmLoan ****************************/

export const AmountRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AmountDescription = styled.div<AmountDescriptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '12px')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ bold }) => (bold ? '#3c4251' : 'inherit')};
`;

export const AmountDescriptionBold = styled.div`
  font-weight: bold;
  color: #3c4251;
  font-size: 20px;
`;

export const AmountNumber = styled(AmountDescription)`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '20px')};
`;

export const DividerConfirmLoan = styled(Divider)`
  &&& {
    border-bottom: 1px solid #ecedee;
  }
`;
