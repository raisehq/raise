import React from 'react';
import styled from 'styled-components';
import RawCoin from '../Coin';
import localeConfig from '../../commons/localeConfig';

const Coin = styled(RawCoin)``;

const Box = styled.div`
  display: flex;
  justify-content: flex;
  align-items: flex;
  ${Coin} {
    color: #5a5a5a;
    margin-left: 8px;
  }
`;

export const CoinValue = ({ value, name, src }: any) => (
  <Box>
    {value}
    <Coin pxWidth="20px" pxHeight="20px" src={src} name={name} />
  </Box>
);

export const generateInfo = ({
  totalAmount,
  coin,
  currentAPR,
  times: { loanTerm, auctionTimeLeft },
  currentAmount,
  loan: { investorCount }
}) => {
  const loanCoinImage = `${process.env.REACT_APP_HOST_IMAGES}/images/coins/${coin.icon}`;
  const totalAmountString = totalAmount.toLocaleString(...localeConfig);
  const currentAmountString = currentAmount.toLocaleString(...localeConfig);
  return [
    {
      title: 'Target amount',
      content: <CoinValue value={totalAmountString} name={coin.text} src={loanCoinImage} />
    },
    { title: 'Loan APR', content: currentAPR },
    { title: 'Days left', content: auctionTimeLeft },
    {
      title: 'Raised so far',
      content: <CoinValue value={currentAmountString} name={coin.text} src={loanCoinImage} />
    },
    { title: 'Loan term', content: loanTerm },
    { title: 'Investors', content: investorCount }
  ];
};
