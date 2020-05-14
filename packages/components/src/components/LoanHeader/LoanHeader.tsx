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
} from './styles';
import { getTotal, padNumber } from './utils';

const LoanHeader = ({
  logo,
  endAuctionDate,
  raisedAmount,
  targetAmount,
  raiseInvestmentAmount,
}) => {
  const [currentTime, setCurrentTime] = useState(dayjs().unix());

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
          <ImageLogo
            src={`${process.env.REACT_APP_HOST_IMAGES}/images/${logo}`}
          />
        </Logo>
        <Timer>{timeLeft(endAuctionDate, currentTime)}</Timer>
      </Row>
      <Row>
        <div>
          <Label>Raised so far</Label>
          <Value>{raisedAmount}</Value>
        </div>
        <div>
          <RightLabel>Target</RightLabel>
          <Value>{targetAmount}</Value>
        </div>
      </Row>
      <Row>
        <ProgressBar>
          <WrapperFiller>
            <RaisedSofarFiller>
              <WrapperFiller>
                <RaiseFiller />
                <TextRaiseFiller>
                  <span>{`${raiseInvestmentAmount}% Raise`}</span>
                </TextRaiseFiller>
              </WrapperFiller>
            </RaisedSofarFiller>
            <TextRaisedSofarFiller>
              <span>{`${getTotal(raisedAmount)(targetAmount)}% Total`}</span>
            </TextRaisedSofarFiller>
          </WrapperFiller>
        </ProgressBar>
      </Row>
    </Wrapper>
  );
};

LoanHeader.propTypes = {
  logo: PropTypes.string.isRequired,
  endAuctionDate: PropTypes.string.isRequired,
  raisedAmount: PropTypes.string.isRequired,
  targetAmount: PropTypes.string.isRequired,
  raiseInvestmentAmount: PropTypes.string.isRequired,
};

export default LoanHeader;
