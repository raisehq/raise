import styled from 'styled-components';
import { Select, Checkbox, Card, Header as HeaderUI, Divider as DividerUI, HeaderProps, DividerProps } from 'semantic-ui-react';
import theme from '../../theme';

interface LoanFormValueProps {
  big?: boolean;
}

export const Header = styled(HeaderUI)<HeaderProps>`
&& {
  color: #3C4251;
}
`;

export const TopHeader = styled(HeaderUI)<HeaderProps>`
&& {
  color: #3C4251;
  max-width: 300px; 
  font-size: 26px;
}
`;

export const Divider = styled(DividerUI)<DividerProps>`
&&&&& {
  border-top: none;
  border-bottom: 1px solid #9498A0;
}`;

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
  max-width: 735px;
  height: 100%;
  box-shadow: ${theme.shadow};
  background: #fff;
  padding: 40px 50px 50px;
  box-sizing: border-box;
`;

export const LoanDescription = styled.div`
  background: #fff;
  box-sizing: border-box;
  max-width: 396px;
`;

export const LoanDescriptionLowerAmount = styled(LoanDescription)`
  margin-top: 40px;
`

export const LoanFormInput = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 60px;
`;
export const SliderWrapper = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
export const LoanConfirmation = styled(Card)`
&&& {
  text-align: right;
  max-width: 350px;
  max-height: 520px;
  width: 100%;
  margin-left: 35px;
  margin-top: 30px;
  padding: 30px 20px 20px 20px;
  box-shadow: 0 0 26px 0 rgba(217,217,217,0.61);
}
`

export const LoanResume = styled.div`
&&& {
  text-align: right;
  padding: 0px 30px;
}`

export const LoanFormInfo = styled.p`
    font-size: 12px;
    margin: 0;
`

export const LoanFormValue = styled('p')<LoanFormValueProps>`
  font-size: ${({big}) => big ? '26px' : '18px'};
  font-weight: bold;
  margin: 0px 0px 17px 0px;
`

export const InputDescription = styled.div`
  min-width: 190px;
  margin-right: 24px;
  font-size: 14px;
  font-family: Lato;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
`;
export const LoanInputBox = styled.div`
  max-width: 170px;
  border-bottom: 1px solid #90a1b5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  input {
    width: 100%;
    border: none !important;
    margin-right: 10px;
    box-sizing: border-box;
    background: none !important;
    font-size: 26px;
    font-weight: bold;
    color: #5c5d5d;
    text-align: right;
  }
`;

export const LoanInputLabel = styled.div`
  font-size: 14px;
  text-align: right;
  font-weight: bold;
  margin-top: 2px;
  & > p {
    font-weight: normal;
    font-size: 12px;
  }
`;

export const LoanSelect = styled(Select)`
  float: right;
  padding: 20px !important;

  i {
    top: auto !important;
  }
`;

export const MininumLoanSelect = styled(LoanSelect)`
&&&& {
  min-width: 120px;
}
`

export const LoanCheckbox = styled(Checkbox)`
  float: right;
  &&&&&& label:before {
    background: #3C4251;
  }
  &&&&&&.checked label:before{
    background: linear-gradient(180deg, #39B54A 0%, #34AA44 100%);
  }
`;

export const InterestCard = styled.div`
  height: 48px;
  width: 200px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #3DC9FF;
  color: #495b70;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButton: any = styled.button`
  height: 60px;
  width: 100%;
  border-radius: 4px;
  background: linear-gradient(270deg, #3DC9FF 0%, #0098CC 100%);  border: none;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  margin: 40px 0px 0px 0px;
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
