import dayjs from 'dayjs';
import {
  getCurrentInstalment,
  // getInstalment,
  getInstalmentAmount,
  getInstalmentPenalty,
  getCurrentDebt,
  getCurrentPenalty,
  getRepayStateByDate,
  getPendingInstalmentsAmount,
  getInstalmentDates,
} from '../src/utils/progressiveCalcs';
import { RepaymentState } from '../src/commons/graphTypes';

describe('Test suite for progressive calculations', () => {
  describe('Test getCurrentInstalment', () => {
    it('Expects to return the correct instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 5;

      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        instalments: 5,
      };
      const date = dayjs().unix();
      const instalment = getCurrentInstalment(loan, date);
      expect(instalment).toEqual(3);
    });
    it('Expects to return instalment bigger than last instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 1, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 4;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        termLength: termEndTimestamp - auctionEndTimestamp,
        instalments: 4,
      };
      const date = dayjs()
        .add(1, 'second')
        .unix(); // 1

      // const instalment = getCurrentInstalment(loan, date);
      const instalment = getCurrentInstalment(loan, date);
      expect(instalment).toEqual(2);
    });
  });
  describe('Test getInstalmetnAmount', () => {
    it('Expects to get the correct ammount with 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
      };
      const decimals = 18;
      const instalmentAmount = getInstalmentAmount(loan, decimals);
      expect(instalmentAmount).toBe(200);
    });
    it('Expects to get the correct ammount with 6 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        termLength: termEndTimestamp - auctionEndTimestamp,
        principal: '1000000000', // 1000
        interestRate: '10000000000000000000', // 10%
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
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
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
      expect(instalmentAmount).toBe(400);
    });
    it('Expects the correct amount in 16 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000', // 1000
        interestRate: '10000000000000000000', // 10%
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
      expect(instalmentAmount).toBe(400);
    });
  });
  describe('Test getInstalmentPenalty', () => {
    it('Expects the penalty to be correct with 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        auctionEndTimestamp: auctionEndTimestamp.toString(),
        termEndTimestamp: termEndTimestamp.toString(),
        interestRate: '10000000000000000000', // 10%
        principal: '1000000000000000000000',
        instalments: 10,
      };
      const decimals = 18;
      const penalty = getInstalmentPenalty(loan, decimals);
      expect(penalty).toEqual(100);
    });
    it('Expects the penalty to be correct with 6 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const loan = {
        auctionEndTimestamp: auctionEndTimestamp.toString(),
        termEndTimestamp: termEndTimestamp.toString(),
        interestRate: '10000000000000000000', // 10%
        principal: '1000000000',
        instalments: 10,
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
        .subtract(oneMonth * 7, 'second')
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
  describe('Test getRepayStateByDate', () => {
    it('Expects to get state not paid for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp: termEndTimestamp.toString(),
        auctionEndTimestamp: auctionEndTimestamp.toString(),
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 2,
        termLength: termLength.toString(),
      };
      const date = dayjs().unix();
      const lenderInstalment = 2;
      const state = getRepayStateByDate(loan, lenderInstalment, date);
      expect(state).toEqual(RepaymentState.Unpaid);
    });
    it('Expects to get state Waiting for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp: termEndTimestamp.toString(),
        auctionEndTimestamp: auctionEndTimestamp.toString(),
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 2,
        termLength: termLength.toString(),
      };
      const lenderInstalment = 2;
      const date = dayjs().unix() + oneMonth;
      const state = getRepayStateByDate(loan, lenderInstalment, date);
      expect(state).toEqual(RepaymentState.Waiting);
    });
    it('Expects to get state Paid for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 3, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const lenderInstalment = 2;
      const loan = {
        termEndTimestamp: termEndTimestamp.toString(),
        auctionEndTimestamp: auctionEndTimestamp.toString(),
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 3,
        termLength: termLength.toString(),
      };
      const date = dayjs().unix();
      const state = getRepayStateByDate(loan, lenderInstalment, date);
      expect(state).toEqual(RepaymentState.Paid);
    });
    it('Expects to get state Withdrawed for instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const lenderInstalment = 3;
      const loan = {
        termEndTimestamp: termEndTimestamp.toString(),
        auctionEndTimestamp: auctionEndTimestamp.toString(),
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 3,
        termLength: termLength.toString(),
      };
      const date = dayjs().unix() - oneMonth * 4;
      const state = getRepayStateByDate(loan, lenderInstalment, date);
      expect(state).toEqual(RepaymentState.Withdrawed);
    });
  });
  describe('Test getCurrentPenalty', () => {
    it('Expects correct penalty amount to pay', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 0,
        termLength,
      };
      const date = dayjs().unix();
      const decimals = 18;
      const penalty = getCurrentPenalty(loan, date, decimals);
      expect(penalty).toEqual(600);
    });
  });
  describe('Test getCurrentDebt', () => {
    it('Expects to calculate correctly the debt with 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000000000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 0,
        termLength,
      };
      const date = dayjs().unix();
      const decimals = 18;
      const debt = getCurrentDebt(loan, decimals, date);
      const missingPayments = 7 * 100 * 2;
      const penalties = 6 * 100;
      expect(debt).toEqual(missingPayments + penalties);
    });
    it('Expects to calculate correctly the debt with 6 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = dayjs()
        .subtract(oneMonth * 7, 'second')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 10;
      const termLength = termEndTimestamp - auctionEndTimestamp;
      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        principal: '1000000000', // 1000
        interestRate: '10000000000000000000', // 10%
        instalments: 10,
        instalmentsPaid: 0,
        termLength,
      };
      const date = dayjs().unix();
      const decimals = 6;
      const totalDebtWithPenalties = getCurrentDebt(loan, decimals, date);
      const missingPayments = 7 * 100 * 2;
      const penalties = 6 * 100;
      expect(totalDebtWithPenalties).toEqual(missingPayments + penalties);
    });
  });
});
