import {} from './progressiveCalcs';
import moment from 'moment';

describe('Test suite for progressive calculations', () => {
  const oneMonth = 1 * 30 * 24 * 60 * 60;
  const daysToEnd = 1;
  const daysFromStart = 2 * 30 - daysToEnd;
  const hoursFromFinish = 23;
  const auctionStartTimestamp = moment()
    .subtract(daysFromStart, 'days')
    .subtract(hoursFromFinish, 'hours')
    .unix();
  const auctionEndTimestamp = auctionStartTimestamp + oneMonth;

  const termLength = 4 * oneMonth;
  const termEndTimestamp = auctionEndTimestamp + termLength;

  let Loan;

  beforeEach(() => {
    Loan = {
      amount: '1000000',
      loan: {
        auctionEndTimestamp: '1589124834',
        auctionEnded: false,
        auctionLength: '2592000',
        auctionStartTimestamp: '1586532834',
        borrowerDebt: '0',
        id: '0x08a9d87cb2b44c3d8771eb0e81d6748ba2fe8be0',
        interestRate: '834873971193415704',
        investorCount: 1,
        loanRepaid: false,
        loanWithdrawn: false,
        maxAmount: '10000000',
        maxInterestRate: '1666666666666666700',
        minimumReached: false,
        netBalance: null,
        operatorBalance: '0',
        operatorFee: '2000000000000000000',
        originator: '0xed9b65514409014aa06ebf4199aaba71af8faea3',
        principal: '1000000',
        state: 6,
        termEndTimestamp: '0',
        termLength: '2592000',

        instalments: 4,
        penaltiesPaid: 0,
        instalmentsPaid: 1,
      },
      amountToWithdraw: '',
      totallyWithdrawn: false,
    };
  });
});
