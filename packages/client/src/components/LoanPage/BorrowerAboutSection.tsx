/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { AboutBorrower } from '@raisehq/components';
import ReactPlayer from 'react-player';
import {
  BorrowerAboutContainer,
  BorrowerInfoContainer,
  BorrowerDescription,
  BorrowerInfoTitle,
  InvestButton,
  ButtonWrapper,
  BorrowerInfo,
  PlayButton,
  PlayerWrapper,
  PlayButtonArrow,
  BorrowerTeam,
  Side
} from './styles';

const BorrowerAbout = ({ borrowerInfo, isLogged, userActivated }) => {
  const onInvestClick = () => {
    if (!isLogged) {
      return '#loanofmonth_signup_email';
    }
    if (!userActivated) {
      return '/kyc';
    }
    return '#invest';
  };

  const getButtonName = () => {
    if (!isLogged) {
      return 'Create account';
    }
    if (!userActivated) {
      return 'Verify account';
    }
    return 'Invest now';
  };

  return (
    <BorrowerAboutContainer>
      <BorrowerInfoTitle>About {borrowerInfo.companyDetails.companyName}</BorrowerInfoTitle>
      <BorrowerInfoContainer>
        <BorrowerInfo>
          {borrowerInfo.companyVideoInfo && borrowerInfo.companyVideoInfo.company_video !== '' && (
            <PlayerWrapper>
              <ReactPlayer
                url={borrowerInfo.companyVideoInfo.company_video}
                muted
                controls
                light={
                  borrowerInfo.companyVideoInfo.company_video_thumbnail !== ''
                    ? borrowerInfo.companyVideoInfo.company_video_thumbnail
                    : false
                }
                playing
                playsinline
                width="100%"
                height="100%"
                playIcon={
                  <PlayButton>
                    <PlayButtonArrow
                      src={`${process.env.REACT_APP_HOST_IMAGES}/images/triangle_down.svg`}
                      alt="play"
                    />
                  </PlayButton>
                }
              />
            </PlayerWrapper>
          )}
          <BorrowerDescription>{borrowerInfo.companyDetails.description}</BorrowerDescription>
        </BorrowerInfo>
        <Side>
          <BorrowerTeam members={borrowerInfo.members} />
          <AboutBorrower borrowerInfo={borrowerInfo} />
        </Side>
      </BorrowerInfoContainer>
      <ButtonWrapper>
        <a href={onInvestClick()}>
          <InvestButton
            text={getButtonName()}
            disabled={false}
            onClick={() => {}}
            idAttr="btn-loanmonth-invest"
            type="primary"
            size="large"
            fullWidth
          />
        </a>
      </ButtonWrapper>
    </BorrowerAboutContainer>
  );
};
export default BorrowerAbout;
