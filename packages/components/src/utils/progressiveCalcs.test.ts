import {
  getCurrentInstalment,
  getInstalmentAmount,
  getInstalmentPenalty,
  // getCurrentDebt,
  // getCurrentPenalty,
  // getProgressiveState,
  getPendingInstalmentsAmount,
  // getInstalmentDates,
} from './progressiveCalcs';
import moment from 'moment';
import { fromDecimal } from './web3-utils';

describe('Test suite for progressive calculations', () => {
  describe('Test getCurrentInstalment', () => {
    it('Expects to return the correct instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = moment()
        .subtract(oneMonth * 3, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth * 5;

      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        instalments: 5,
      };
      const date = moment().unix();
      const instalment = getCurrentInstalment(loan, date);
      expect(instalment).toEqual(4);
    });
    it('Expects to return instalment bigger than last instalment', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = moment()
        .subtract(oneMonth * 3, 'seconds')
        .unix();
      const termEndTimestamp = auctionEndTimestamp + oneMonth;

      const loan = {
        termEndTimestamp,
        auctionEndTimestamp,
        instalments: 2,
      };
      const date = moment().unix();
      const instalment = getCurrentInstalment(loan, date);
      expect(instalment).toBeGreaterThan(2);
    });
  });
  describe('Test getInstalmetnAmount', () => {
    it('Expects to get the correct ammount with 18 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = moment()
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
      const auctionEndTimestamp = moment()
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
      const auctionEndTimestamp = moment()
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
      const date = moment().unix();
      const instalmentAmount = getPendingInstalmentsAmount(
        loan,
        decimals,
        date
      );
      expect(instalmentAmount).toBe(600);
    });
    it('Expects the correct amount in 16 decimals', () => {
      const oneMonth = 1 * 30 * 24 * 60 * 60;
      const auctionEndTimestamp = moment()
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
      const date = moment().unix();
      const instalmentAmount = getPendingInstalmentsAmount(
        loan,
        decimals,
        date
      );
      expect(instalmentAmount).toBe(600);
    });
  });
  describe.only('Test getInstalmentPenalty', () => {
    it('Expects the penalty to be correct', () => {
      const loan = {
        interestRate: '100000000000000000', // 10%
      };
      const penalty = getInstalmentPenalty(loan);
      const expectedPenalty =
        Number(fromDecimal(loan.interestRate.toString())) * 2;
      expect(penalty).toEqual(expectedPenalty);
    });
  });
  xdescribe('Test getInstalmentDates', () => {});
  xdescribe('Test getStateByDate', () => {});
  xdescribe('Test getCurrentPenalty', () => {});
  xdescribe('Test getCurrentDebt', () => {});
  xdescribe('Test getProgressiveState', () => {});
});
