import {
  // calculateTimes,
  calculateAPR,
  calculateExpectedRoi,
  // calculateInterest,
  calculateInvestmentReturn,
  calculateROI,
} from './loanUtils';

describe('Test suit for loan utils', () => {
  const auctionStart = Date.now();
  const auctionEnd = auctionStart + 300; // 5 min

  // describe('Calculate Interest', () => {
  //   it('Expects the interest to be calculated correctly', () => {
  //     const actualAPR = calculateInterest(auction);
  //     const expectedAPR = 1;
  //     expect(expectedAPR).toEqual(actualAPR);
  //   });
  // });
  describe('Calculate APR', () => {
    const auction = {
      auctionEndTimestamp: auctionEnd,
      auctionEnded: true,
      auctionLength: '300',
      auctionStartTimestamp: auctionStart,
      borrowerDebt: '10000000478395061728300',
      id: '0x1d6f6e71c018ceff47e897261186fbaabb4e9d74',
      interestRate: '10000000000000000000',
      investorCount: 1,
      loanRepaid: false,
      loanWithdrawn: false,
      maxAmount: '10000000000000000000000',
      maxInterestRate: '10000000000000000000',
      minimumReached: true,
      netBalance: '9900000000000000000000',
      operatorBalance: '100000000000000000000',
      operatorFee: '1000000000000000000',
      principal: '10000000000000000000000',
      state: 2,
      termEndTimestamp: '1567695272',
      termLength: 30 * 24 * 60 * 60,
    };
    it('Expects the apr to be calculated correctly', () => {
      const actualAPR = calculateAPR(auction);
      const expectedAPR = 0.1 * 12;
      expect(expectedAPR).toEqual(actualAPR);
    });
  });
  // describe('Calculate Times', () => {
  //   it('Expects the times to be calculated correctly', () => {
  //     const actualTimes = calculateTimes(auction);
  //     const expectedTimes = 1;
  //     expect(expectedTimes).toEqual(actualTimes);
  //   });
  // });
  describe('Calculate Expected ROI', () => {
    const auction = {
      auctionEndTimestamp: auctionEnd,
      auctionEnded: true,
      auctionLength: '300',
      auctionStartTimestamp: auctionStart,
      borrowerDebt: '10000000478395061728300',
      id: '0x1d6f6e71c018ceff47e897261186fbaabb4e9d74',
      interestRate: '10000000000000000000',
      investorCount: 1,
      loanRepaid: false,
      loanWithdrawn: false,
      maxAmount: '10000000000000000000000',
      maxInterestRate: '10000000000000000000',
      minimumReached: true,
      netBalance: '9900000000000000000000',
      operatorBalance: '100000000000000000000',
      operatorFee: '1000000000000000000',
      principal: '10000000000000000000000',
      state: 2,
      termEndTimestamp: '1567695272',
      termLength: 30 * 24 * 60 * 60,
    };
    it('Expects the expected ROI to be calculated correctly', () => {
      const actualROI = calculateExpectedRoi(auction, 10);
      const expectedROI = 10;
      expect(actualROI).toEqual(expectedROI);
    });
  });
  describe('Calculate ROI', () => {
    const auction = {
      auctionEndTimestamp: auctionEnd,
      auctionEnded: true,
      auctionLength: '300',
      auctionStartTimestamp: auctionStart,
      borrowerDebt: '10000000478395061728300',
      id: '0x1d6f6e71c018ceff47e897261186fbaabb4e9d74',
      interestRate: '10000000000000000000',
      investorCount: 1,
      loanRepaid: false,
      loanWithdrawn: false,
      maxAmount: '10000000000000000000000',
      maxInterestRate: '10000000000000000000',
      minimumReached: true,
      netBalance: '9900000000000000000000',
      operatorBalance: '100000000000000000000',
      operatorFee: '1000000000000000000',
      principal: '10000000000000000000000',
      state: 2,
      termEndTimestamp: '1567695272',
      termLength: 30 * 24 * 60 * 60,
    };
    it('Expects the roi to be calculated correctly', () => {
      const actualROI = calculateROI(auction);
      const expectedROI = 0.1;
      expect(actualROI).toEqual(expectedROI);
    });
  });
  describe('Calculate Return of investment', () => {
    const auction = {
      auctionEndTimestamp: auctionEnd,
      auctionEnded: true,
      auctionLength: '300',
      auctionStartTimestamp: auctionStart,
      borrowerDebt: '10000000478395061728300',
      id: '0x1d6f6e71c018ceff47e897261186fbaabb4e9d74',
      interestRate: '10000000000000000000',
      investorCount: 1,
      loanRepaid: false,
      loanWithdrawn: false,
      maxAmount: '10000000000000000000000',
      maxInterestRate: '10000000000000000000',
      minimumReached: true,
      netBalance: '9900000000000000000000',
      operatorBalance: '100000000000000000000',
      operatorFee: '1000000000000000000',
      principal: '10000000000000000000000',
      state: 2,
      termEndTimestamp: '1567695272',
      termLength: 30 * 24 * 60 * 60,
    };
    it('Expects the roi to be calculated correctly', () => {
      const actualROI = calculateROI(auction);
      const expectedROI = 0.1;
      expect(actualROI).toEqual(expectedROI);
    });
  });
  describe('Calculate Investment return', () => {
    const auction = {
      auctionEndTimestamp: auctionEnd,
      auctionEnded: true,
      auctionLength: '300',
      auctionStartTimestamp: auctionStart,
      borrowerDebt: '10000000478395061728300',
      id: '0x1d6f6e71c018ceff47e897261186fbaabb4e9d74',
      interestRate: '10000000000000000000',
      investorCount: 1,
      loanRepaid: false,
      loanWithdrawn: false,
      maxAmount: '10000000000000000000000',
      maxInterestRate: '10000000000000000000',
      minimumReached: true,
      netBalance: '9900000000000000000000',
      operatorBalance: '100000000000000000000',
      operatorFee: '1000000000000000000',
      principal: '10000000000000000000000',
      state: 2,
      termEndTimestamp: '1567695272',
      termLength: 30 * 24 * 60 * 60,
      lenderAmount: '10000000000000000000000',
    };
    it('Expects the roi to be calculated correctly', () => {
      const actualAmount = calculateInvestmentReturn(auction);
      const expectedAmount = 11000;
      expect(actualAmount).toEqual(expectedAmount);
    });
  });
});
