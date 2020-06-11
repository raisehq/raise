import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Icon } from 'semantic-ui-react';
import { fromDecimal } from '../../utils/web3-utils';
import Button from '../commons/ButtonControl/Button';
import {
  ReferralContainer,
  ReferralSection,
  ReferralSubSection,
  Title,
  ReferralText,
  LabelSection,
  CopyButton,
  InputTextCustom,
  Row,
  SocialMedia,
  SocialMediaWrapper,
  // TotalInput,
  TotalNumber,
  ReferralSectionShare,
  TermsAndCond,
  LabelSectionWithNumber,
  TermsAndCondRow
} from './styles';

const ReferralProgram = ({
  shareLink,
  totalCount,
  amountToWithdraw,
  withdrawAction,
  coin,
  kycStatus
}) => {
  const [state, setState] = useState<any>({
    value: shareLink,
    copied: false
  });
  const [amount, setAmount]: any = useState();

  useEffect(() => {
    if (coin && amountToWithdraw > 0) {
      const amountDecimals: any = Number(fromDecimal(amountToWithdraw, coin.decimals));
      setAmount(amountDecimals);
    }
  }, [coin, amountToWithdraw]);

  const ctaText = () => {
    if (kycStatus !== 3) {
      return 'Verify account';
    }
    if (amount && amount !== 0) {
      return `Withdraw ${amount} ${coin.text}`;
    }
    return 'Nothing to withdraw';
  };

  return (
    <ReferralContainer>
      <ReferralSection>
        <ReferralSubSection>
          <Title>Invite your friends</Title>
          <ReferralText>
            Share your personal link and earn 50 DAI with each friend that invests with us.
            <TermsAndCondRow>
              <TermsAndCond
                href={`${process.env.REACT_APP_HOST_IMAGES}/toc.pdf`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms and conditions
              </TermsAndCond>
            </TermsAndCondRow>
          </ReferralText>
        </ReferralSubSection>
      </ReferralSection>
      <ReferralSection>
        <ReferralSubSection>
          <LabelSection>Copy the link</LabelSection>
          <Row>
            <InputTextCustom placeholder={shareLink} disabled />
            <CopyToClipboard
              text={shareLink}
              onCopy={() => setState({ value: shareLink, copied: true })}
            >
              <CopyButton icon={state.copied ? 'check' : 'copy'} copied={state.copied} />
            </CopyToClipboard>
          </Row>
        </ReferralSubSection>
      </ReferralSection>
      <ReferralSectionShare>
        <ReferralSubSection>
          <LabelSection>Share</LabelSection>
          <SocialMediaWrapper>
            <FacebookShareButton url={shareLink}>
              <SocialMedia>
                <Icon name="facebook f" size="big" />
              </SocialMedia>
            </FacebookShareButton>
            <TwitterShareButton url={shareLink}>
              <SocialMedia>
                <Icon name="twitter" size="big" />
              </SocialMedia>
            </TwitterShareButton>
          </SocialMediaWrapper>
        </ReferralSubSection>
        <ReferralSubSection>
          <LabelSectionWithNumber>
            <LabelSection>Successful Referrals:</LabelSection>
            <TotalNumber>{totalCount}</TotalNumber>
          </LabelSectionWithNumber>
          <Row>
            <Button
              disabled={!amount || amount === 0}
              onClick={withdrawAction}
              idAttr="withdraw-referral-bonus"
              text={ctaText()}
              type="primary"
              size="small"
              fullWidth
            />
          </Row>
          {/* <LabelSection>Successful Referrals</LabelSection>
          <Row>
            <TotalInput placeholder="Total" disabled />
            <TotalNumber>{totalCount}</TotalNumber>
          </Row> */}
        </ReferralSubSection>
      </ReferralSectionShare>
    </ReferralContainer>
  );
};

export default ReferralProgram;
