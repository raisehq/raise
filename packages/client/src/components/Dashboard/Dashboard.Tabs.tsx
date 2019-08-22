import React, { useContext, useState } from 'react';
import { getWeb3, averageBlockTime } from '../../utils';
import { fromWei } from 'web3-utils';
import numeral from 'numeral';
import { Card } from '@raisehq/components';
import { DashboardTab } from './Dashboard.styles';
import { DashboardContext } from './Dashboard';
import useAsyncEffect from '../../hooks/useAsyncEffect';

const calculateFromWei = number => fromWei(number.toString(), 'ether');

const getAuctionEndDate = auctionRemainingSeconds => {
  let now = new Date();
  now.setSeconds(now.getSeconds() + auctionRemainingSeconds);
  return now;
};

function getTermLength(d, dd) {
  var hour = 60 * 60 * 1000,
      day = hour * 24,
      month = day * 30,
      ms = Math.abs(d - dd),
      months = parseInt((ms / month).toString(), 10);    

  ms = ms - months * month;    
  var days = parseInt((ms / day).toString(), 10); 
  ms -= days * day;
  var hours = parseInt((ms / hour).toString(), 10);   
  ms -= hours * hour;

  return months;
};

const calculateTimes = async auction => {
  try {
    const web3 = getWeb3();
    const currentBlock = await web3.eth.getBlockNumber();
    const averageBT = await averageBlockTime();
    const auctionRemainingBlocks = auction.auctionEndBlock - currentBlock;
    const auctionRemainingSeconds = auctionRemainingBlocks * averageBT;
    const auctionEndDate = getAuctionEndDate(auctionRemainingSeconds);
    const termEndDate = new Date(parseInt(auction.termEndTimestamp));
    const loanTerm = getTermLength(termEndDate, auctionEndDate);

    let seconds = auctionRemainingSeconds;
    const daysLeft = Math.floor(seconds / (3600*24));
  

    return {loanTerm, daysLeft};
  } catch (error) {
    return error;
  }
};

const Auction = ({ auction }) => {
  const [times, setTimes]: any = useState({
    loanTerm: '-',
    daysLeft: '-'
  });
  const maxAmount: any = calculateFromWei(auction.maxAmount);
  const operatorFee: any = calculateFromWei(auction.operatorFee);
  const principal: any = calculateFromWei(auction.principal);
  const systemFees: any = numeral((maxAmount * operatorFee) / 100).format();

  useAsyncEffect(async () => {
    const {loanTerm, daysLeft} = await calculateTimes(auction);
    setTimes({loanTerm, daysLeft});
  }, []);

  return (
    <Card>
      <Card.Header title="Requested Amount" amount={auction.principal} />
      <Card.Grid>
        <Card.Row title="System Fees" content={systemFees} />
        <Card.Row title="Loan Term" content={times.loanTerm} />
        <Card.Row title="Net Loan Proceed" content={auction.netBalance || 0} />
        <Card.Row title="Requested Amount" content={maxAmount} />
        <Card.Row title="APR" content={auction.interestRate * 12} />
        <Card.Row title="Total Repayemnt" content={auction.borrowerDebt} />
      </Card.Grid>
      <Card.Graph currentAmount={principal} totalAmount={maxAmount} />
      <Card.Grid nobottom>
        <Card.Row title="Investors" content={auction.investorCount} />
        <Card.Row title="Days Left" content={times.daysLeft} />
      </Card.Grid>
    </Card>
  );
};

const Tabs = () => {
  const { auctions }: any = useContext(DashboardContext);

  const panes = [
    {
      menuItem: 'Live auctions',
      render: () => (
        <DashboardTab.Pane loading={!auctions.length}>
          {auctions.map((auction, index) => (
            <Auction auction={auction} key={index}/>
          ))}
        </DashboardTab.Pane>
      )
    },
    {
      menuItem: 'Active loans',
      render: () => <DashboardTab.Pane>tab 2</DashboardTab.Pane>
    }
  ];

  return (
    <DashboardTab menu={{ secondary: true, pointing: true }} panes={panes} />
  );
};

export default Tabs;
