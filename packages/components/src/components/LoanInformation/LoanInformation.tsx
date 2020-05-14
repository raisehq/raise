import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Item, Label, Value, ItemWithIcon, ImageLogo } from './styles';

const LoanInformation = ({
  erc20Logo,
  currency,
  currentAPR,
  investorsCount,
  loanTerm,
  repaymentMethod
}) => (
  <Wrapper>
    <Item>
      <Label>Currency</Label>
      <ItemWithIcon>
        <ImageLogo src={`${process.env.REACT_APP_HOST_IMAGES}/images/coins/${erc20Logo}`} />
        <Value>{currency}</Value>
      </ItemWithIcon>
    </Item>
    <Item>
      <Label>Current APR</Label>
      <Value>{currentAPR}</Value>
    </Item>
    <Item>
      <Label>Investors</Label>
      <Value>{investorsCount}</Value>
    </Item>
    <Item>
      <Label>Loan Term</Label>
      <Value>{loanTerm}</Value>
    </Item>
    <Item>
      <Label>Repayment</Label>
      <Value>{repaymentMethod}</Value>
    </Item>
  </Wrapper>
);

LoanInformation.propTypes = {
  erc20Logo: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currentAPR: PropTypes.string.isRequired,
  investorsCount: PropTypes.number.isRequired,
  loanTerm: PropTypes.string.isRequired,
  repaymentMethod: PropTypes.string.isRequired
};

export default LoanInformation;
