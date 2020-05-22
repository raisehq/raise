import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  Wrapper,
  Row,
  Logo,
  Value,
  Label,
  ProgressBar,
  RightLabel,
  ImageLogo,
  RaisedSofarFiller,
  RaiseFiller,
  WrapperFiller,
  TextRaiseFiller,
  TextRaisedSofarFiller,
  Timer,
  TimerWrapper,
  TimerBox,
  TimerUnity,
  TimerLabel,
  Percentage
} from './styles';
import { getTotal, padNumber, isRaiseInvested } from './utils';
import { getCalculations } from '../../utils/loanUtils';

const LoanHeader = ({ logo, decimals, auction }) => {
  const [currentTime, setCurrentTime] = useState(dayjs().unix());

  const calcs = getCalculations(auction, decimals);

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentTime(dayjs().unix()), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentTime]);

  const timeLeft = (lastDate, now) => {
    const difference = lastDate - now;

    if (difference > 0) {
      const daysDifference = Math.floor(difference / 86400);
      const hoursDifference = Math.floor(difference / 3600) % 24;
      const minutesDifference = Math.floor(difference / 60) % 60;
      const secondsDifference = difference % 60;

      if (daysDifference === 0) {
        if (hoursDifference === 0) {
          if (minutesDifference === 0) {
            return (
              <TimerWrapper>
                <TimerBox>
                  <TimerUnity>00</TimerUnity>
                  <TimerLabel>min</TimerLabel>
                </TimerBox>

                <div>:</div>

                <TimerBox>
                  <TimerUnity>{padNumber(secondsDifference)}</TimerUnity>
                  <TimerLabel>sec</TimerLabel>
                </TimerBox>
              </TimerWrapper>
            );
          }
          return (
            <TimerWrapper>
              <TimerBox>
                <TimerUnity>{padNumber(minutesDifference)}</TimerUnity>
                <TimerLabel>min</TimerLabel>
              </TimerBox>
              <div>:</div>
              <TimerBox>
                <TimerUnity>{padNumber(secondsDifference)}</TimerUnity>
                <TimerLabel>sec</TimerLabel>
              </TimerBox>
            </TimerWrapper>
          );
        }
        return (
          <TimerWrapper>
            <TimerBox>
              <TimerUnity>{padNumber(hoursDifference)}</TimerUnity>
              <TimerLabel>hours</TimerLabel>
            </TimerBox>
            <div>:</div>
            <TimerBox>
              <TimerUnity>{padNumber(minutesDifference)}</TimerUnity>
              <TimerLabel>min</TimerLabel>
            </TimerBox>
          </TimerWrapper>
        );
      }
      return (
        <TimerWrapper>
          <TimerBox>
            <TimerUnity>{padNumber(daysDifference)}</TimerUnity>
            <TimerLabel>days</TimerLabel>
          </TimerBox>
          <div>:</div>
          <TimerBox>
            <TimerUnity>{padNumber(hoursDifference)}</TimerUnity>
            <TimerLabel>hours</TimerLabel>
          </TimerBox>
        </TimerWrapper>
      );
    }
    return (
      <TimerWrapper>
        <TimerBox>
          <TimerUnity>00</TimerUnity>
          <TimerLabel>min</TimerLabel>
        </TimerBox>
        <div>:</div>
        <TimerBox>
          <TimerUnity>00</TimerUnity>
          <TimerLabel>sec</TimerLabel>
        </TimerBox>
      </TimerWrapper>
    );
  };

  return (
    <Wrapper>
      <Row>
        <Logo>
          <ImageLogo src={logo} />
        </Logo>
        <Timer>{timeLeft(auction.auctionEndTimestamp, currentTime)}</Timer>
      </Row>
      <Row>
        <div>
          <Label>Raised so far</Label>
          <Value>{calcs.principal}</Value>
        </div>
        <div>
          <RightLabel>Target</RightLabel>
          <Value>{calcs.maxAmount}</Value>
        </div>
      </Row>
      <Row>
        <ProgressBar>
          <WrapperFiller>
            <RaisedSofarFiller
              width={parseInt(getTotal(calcs.principalNum, calcs.maxAmountNum), 10)}
            >
              <TextRaisedSofarFiller
                width={parseInt(getTotal(calcs.principalNum, calcs.maxAmountNum), 10)}
              >
                <Percentage>{`${getTotal(
                  calcs.principalNum,
                  calcs.maxAmountNum
                )}% Total`}</Percentage>
              </TextRaisedSofarFiller>
            </RaisedSofarFiller>
            {isRaiseInvested(calcs.principalNum, calcs.maxAmountNum) && (
              <>
                <RaiseFiller percent={10} />
                <TextRaiseFiller>
                  <Percentage>10% Raise</Percentage>
                </TextRaiseFiller>
              </>
            )}
          </WrapperFiller>
        </ProgressBar>
      </Row>
    </Wrapper>
  );
};

LoanHeader.propTypes = {
  logo: PropTypes.string.isRequired,
  decimals: PropTypes.number.isRequired,
  auction: PropTypes.shape({
    auctionEndTimestamp: PropTypes.string,
    auctionEnded: PropTypes.bool,
    auctionLength: PropTypes.string,
    auctionStartTimestamp: PropTypes.string,
    borrowerDebt: PropTypes.string,
    id: PropTypes.string,
    interestRate: PropTypes.string,
    investorCount: PropTypes.number,
    maxAmount: PropTypes.string,
    maxInterestRate: PropTypes.string,
    minInterestRate: PropTypes.string,
    minimumReached: PropTypes.bool,
    netBalance: PropTypes.string,
    operatorBalance: PropTypes.string,
    operatorFee: PropTypes.string,
    originator: PropTypes.string,
    principal: PropTypes.string,
    state: PropTypes.number,
    termEndTimestamp: PropTypes.string,
    termLength: PropTypes.string,
    tokenAddress: PropTypes.string
  }).isRequired
};

export default LoanHeader;
