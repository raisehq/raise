import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Icon } from 'semantic-ui-react';
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
  TotalInput,
  TotalNumber,
  ReferralSectionShare,
  TermsAndCond,
  TermsAndCondRow
} from './styles';

const ReferralProgram = ({ shareLink, totalCount }) => {
  const [state, setState] = useState<any>({
    value: shareLink,
    copied: false
  });

  return (
    <ReferralContainer>
      <ReferralSection>
        <ReferralSubSection>
          <Title>Invite your friends</Title>
          <ReferralText>
            Share your personal invitation link and win 49 DAI with each friend that invests with
            us.
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
        {false && (
          <ReferralSubSection>
            <LabelSection>Successful Referrals</LabelSection>
            <Row>
              <TotalInput placeholder="Total" disabled />
              <TotalNumber>{totalCount}</TotalNumber>
            </Row>
          </ReferralSubSection>
        )}
      </ReferralSectionShare>
    </ReferralContainer>
  );
};

export default ReferralProgram;
