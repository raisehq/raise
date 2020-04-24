import dayjs from 'dayjs';
import {
  getCurrentInstalment,
  getInstalmentAmount,
  getInstalmentPenalty,
  getCurrentDebt,
  getCurrentPenalty,
  getStateByDate,
  getPendingInstalmentsAmount,
  getInstalmentDates,
} from './progressiveCalcs';

describe('Test suite for progressive calculations', () => {
  describe('Test getCurrentInstalment', () => {
    it('Expects to return the correct instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 5;

      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        instalments: 5,
      };
      const date = dayjs().unix();
      const instalment = getCurrentInstalment(loan, date);
      expect(instalment).toEqual(4);
    });
    it('Expects to return instalment bigger than last instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth;

      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        instalments: 2,
      };
      const date = dayjs().unix();
      const instalment = getCurrentInstalment(loan, date);
      expect(instalment).toBeGreaterThan(2);
    });
  });
  describe('Test getInstalmetnAmount', () => {
    it('Expects to get the correct ammount with 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
      };
      const decimals = 18;
      const instalmentAmount = getInstalmentAmount(loan, decimals);
      expect(instalmentAmount).toBe(200);
    });
    it('Expects to get the correct ammount with 6 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
      };
      const decimals = 6;
      const instalmentAmount = getInstalmentAmount(loan, decimals);
      expect(instalmentAmount).toBe(200);
    });
  });
  describe('Test getPendingInstalmentsAmount', () => {
    it('Expects the correct amount in 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 5,
      };
      const decimals = 18;
      const date = dayjs().unix();
      const instalmentAmount = getPendingInstalmentsAmount(
        loan,
        decimals,
        date
      );
      expect(instalmentAmount).toBe(600);
    });
    it('Expects the correct amount in 16 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 5,
      };
      const decimals = 6;
      const date = dayjs().unix();
      const instalmentAmount = getPendingInstalmentsAmount(
        loan,
        decimals,
        date
      );
      expect(instalmentAmount).toBe(600);
    });
  });
  describe('Test getInstalmentPenalty', () => {
    it('Expects the penalty to be correct with 18 decimals', () => {
      const loan = {
        interestRate: '100000000000000000', // 10%
        principal: '1000000000000000000000',
      };
      const decimals = 18;
      const penalty = getInstalmentPenalty(loan, decimals);
      expect(penalty).toEqual(100);
    });
    it('Expects the penalty to be correct with 6 decimals', () => {
      const loan = {
        interestRate: '100000000000000000', // 10%
        principal: '1000000000',
      };
      const decimals = 6;
      const penalty = getInstalmentPenalty(loan, decimals);
      expect(penalty).toEqual(100);
    });
  });
  describe('Test getInstalmentDates', () => {
    it('Expects to get the dates of all the instalments', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 4;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        instalments: 4,
        termLength,
      };
      const dates = getInstalmentDates(loan);
      const expectedDates = [
        auctionEndTimestamp + termLength / loan.instalments,
        auctionEndTimestamp + (termLength / loan.instalments) * 2,
        auctionEndTimestamp + (termLength / loan.instalments) * 3,
        auctionEndTimestamp + (termLength / loan.instalments) * 4,
      ];
      expect(dates).toEqual(expectedDates);
    });
  });
  describe('Test getStateByDate', () => {
    it('Expects to get state not paid for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const debtWithdrawnDate = auctionEndTimestamp + oneMonth * 3;
      const funding = {
        loan: {
          termEndTimestamp,
          auctionEndTimestamp,
          principal: '1000000000000000000000', // 1000
          interestRate: '100000000000000000', // 10%
          instalments: 10,
          instalmentsPaid: 2,
          termLength,
        },
        debtWithdrawnDate,
      };
      const date = dayjs().unix();
      const state = getStateByDate(funding, date);
      expect(state).toEqual('Not paid');
    });
    it('Expects to get state Waiting for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const debtWithdrawnDate = auctionEndTimestamp + oneMonth * 3;
      const funding = {
        loan: {
          termEndTimestamp,
          auctionEndTimestamp,
          principal: '1000000000000000000000', // 1000
          interestRate: '100000000000000000', // 10%
          instalments: 10,
          instalmentsPaid: 2,
          termLength,
        },
        debtWithdrawnDate,
      };
      const date = dayjs().unix() + oneMonth;
      const state = getStateByDate(funding, date);
      expect(state).toEqual('Waiting');
    });
    it('Expects to get state Paid for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const debtWithdrawnDate = auctionEndTimestamp + oneMonth * 3;
      const funding = {
        loan: {
          termEndTimestamp,
          auctionEndTimestamp,
          principal: '1000000000000000000000', // 1000
          interestRate: '100000000000000000', // 10%
          instalments: 10,
          instalmentsPaid: 2,
          termLength,
        },
        debtWithdrawnDate,
      };
      const date = dayjs().unix() - oneMonth;
      const state = getStateByDate(funding, date);
      expect(state).toEqual('Paid');
    });
    it('Expects to get state Withdrawed for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const debtWithdrawnDate = auctionEndTimestamp + oneMonth * 3;
      const funding = {
        loan: {
          termEndTimestamp,
          auctionEndTimestamp,
          principal: '1000000000000000000000', // 1000
          interestRate: '100000000000000000', // 10%
          instalments: 10,
          instalmentsPaid: 3,
          termLength,
        },
        debtWithdrawnDate,
      };
      const date = dayjs().unix() - oneMonth * 4;
      const state = getStateByDate(funding, date);
      expect(state).toEqual('Withdrawed');
    });
  });
  describe('Test getCurrentPenalty', () => {
    it('Expects correct penalty amount to pay', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 0,
        termLength,
      };
      const date = dayjs().unix();
      const decimals = 18;
      const penalty = getCurrentPenalty(loan, date, decimals);
      expect(penalty).toEqual(7 * 100);
    });
  });
  describe('Test getCurrentDebt', () => {
    it('Expects to calculate correctly the debt with 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 0,
        termLength,
      };
      const date = dayjs().unix();
      const decimals = 18;
      const penalty = getCurrentDebt(loan, decimals, date);
      expect(penalty).toEqual(7 * 100 + 8 * 200);
    });
    it('Expects to calculate correctly the debt with 6 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000', // 1000
        interestRate: '100000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 0,
        termLength,
      };
      const date = dayjs().unix();
      const decimals = 6;
      const penalty = getCurrentDebt(loan, decimals, date);
      expect(penalty).toEqual(7 * 100 + 8 * 200);
    });
  });
});
