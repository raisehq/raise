import React from 'react';
import { Wrapper, Item, Label, Value, ItemWithIcon, ImageLogo } from './styles';
import { getCalculations } from '../../utils/loanUtils';
import { ERC20_LOGOS } from '../../commons/constants';

const LoanInformation = ({ currency, auction, decimals, repaymentMethod = 'Bullet' }) => {
  const calcs = getCalculations(auction, decimals);
  const erc20Logo = ERC20_LOGOS[currency];

  return (
    <Wrapper>
      <Item>
        <Label>Invest. type</Label>
        <Value>Loan</Value>
      </Item>
      <Item>
        <Label>Currency</Label>
        <ItemWithIcon>
          <ImageLogo src={erc20Logo} />
          <Value>{currency}</Value>
        </ItemWithIcon>
      </Item>
      <Item>
        <Label>Current APR</Label>
        <Value>{calcs.currentAPR}</Value>
      </Item>
      <Item>
        <Label>Investors</Label>
        <Value>{auction.investorCount}</Value>
      </Item>
      <Item>
        <Label>Loan Term</Label>
        <Value>{calcs.times.loanTerm}</Value>
      </Item>
      <Item>
        <Label>Repayment</Label>
        <Value>{repaymentMethod}</Value>
      </Item>
    </Wrapper>
  );
};

export default LoanInformation;
