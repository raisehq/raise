import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Row,
  Logo,
  Timer,
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
} from './styles';

const LoanHeader = ({
  logo,
  endAuctionDate,
  raisedAmount,
  targetAmount,
  raiseInvestmentAmount,
}) => {
  const getTotal = amount => target =>
    (parseInt(amount, 10) / parseInt(target, 10)) * 100;

  return (
    <Wrapper>
      <Row>
        <Logo>
          <ImageLogo
            src={`${process.env.REACT_APP_HOST_IMAGES}/images/${logo}`}
          />
        </Logo>
        <Timer>{endAuctionDate}</Timer>
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
