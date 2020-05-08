import styled from 'styled-components';
import { Icon, Popup } from 'semantic-ui-react';
import { animated } from 'react-spring';
import { Card as RaiseCard } from '@raisehq/components';
import LoanInput from '../../CreateLoan/LoanInput';
import CoinSelectorRaw, {
  NoLoggedCoinSelector as NoLoggedCoinSelectorRaw
} from '../../CoinSelector';
import RawCoin from '../../Coin';

interface TableItemContainerProps {
  latest?: boolean;
}

export const TableCollapse = styled(animated.div)`
  overflow: hidden;
  position: relative;
`;

export const AnimatedDiv = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Chevron = styled(animated(Icon))`
  &&& {
    display: block;
  }
`;

export const TableItemContainer = styled.div<TableItemContainerProps>`
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 49px;
  ${({ latest }) => !latest && 'border-bottom: 1px solid #ECECEC;'}}
  & > div:last-child {
    font-weight: bold;
  }
`;

export const TitleWithTooltip = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InvestmentTooltip = styled(Popup)`
  margin-left: 5px !important;
  width: 190px;
  text-align: center;
`;

export const InvestIcon = styled(Icon)``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MaxButton = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  text-decoration-line: underline;
  color: #00da9e;
  cursor: pointer;
`;

export const Divider = styled.div`
  margin: 0px 6px;
`;

interface EligibleProps {
  active: boolean;
}
/** */
export const MaxInputs = styled.div`
  margin-top: 10px;
`;

export const CoinSelector = styled(CoinSelectorRaw)`
  max-width: 100%;
  width: 100%;
  height: 48px;
  &&&&.disabled {
    opacity: 1;
    & .dropdown.icon {
      display: none;
    }
  }
`;

export const NoLoggedCoinSelector = styled(NoLoggedCoinSelectorRaw)`
  min-width: 100%;
  width: 100%;
  height: 48px;
  &&&&.disabled {
    opacity: 1;
    & .dropdown.icon {
      display: none;
    }
  }
`;

export const Coin = styled(RawCoin)``;

export const Card = styled(RaiseCard)`
  display: flex;
  align-items: center;
`;

export const InvestBox = styled.div`
  font-size: 16px;
  color: #8a8e97;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 24px auto 0px auto;

  &&&&&&&& ${Coin} {
    font-size: 16px;
    color: #8a8e97;
    font-weight: normal;
  }
`;

export const BalanceWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  &&&& ${CoinSelector} {
    max-width: 100%;
  }
  &&&& .ui.dropdown .menu {
    width: 100%;
  }
  &&&& .ui.selection.dropdown > .dropdown.icon {
    top: unset;
    padding: unset;
    right: unset;
    position: unset;
    margin: 0px 0px 0px 17px;
  }
  & > div:first-child {
    margin-bottom: 6px;
    font-weight: bold;
    color: #8a8e97;
  }
`;

export const Offer = styled.div`
  padding: 4px 12px;
  border-radius: 16px;
  background: #f5ac37;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Eligible = styled.div<EligibleProps>`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  color: #00da9e;
  text-align: center;
  padding: 6px;
  max-width: 260px;
  font-weight: bold;
  font-size: 14px;
`;

export const BigInput = styled(LoanInput)`
  font-size: ${({ value }) => {
    if (value?.toString()?.length > 8) {
      return 28;
    }
    if (value?.toString()?.length > 6) {
      return 36;
    }
    return 48;
  }}px;
  line-height: 56px;
  width: ${({ value }) => (value?.toString()?.length > 1 ? value?.toString()?.length + 1 : 1)}ch;
  text-align: ${({ value }) => (value ? 'center' : 'left')};
  min-width: ${({ value }) => (value ? '0px' : '1ch')};
  margin: ${({ value }) => (value ? '0px 1ch' : '0px 1ch')};
  color: #00da9e;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  display: block;
  border: none !important;
  box-sizing: border-box;
  background: none !important;
  text-decoration: underline;

  outline: none;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    /* Edge */
    color: #c5c7cb;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c5c7cb;
  }

  &::placeholder {
    text-align: center;
  }
`;

export const ErrorBox = styled.div`
  width: 100%;
  min-height: 30px;
  color: red;
  display: block;
  content: '';
  margin-top: 8px;
`;

export const InvestHeader = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #000;
`;

export const TooltipIconWrapper = styled.div`
  margin-left: 5px;
`;
