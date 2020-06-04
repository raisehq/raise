import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
  ReferralSectionShare
} from './styles';

const ReferralProgram = ({ shareLink, totalCount }) => {
  const [state, setState] = useState<any>({
    value: shareLink,
    copied: false
  });

  const encodedSharedLink = encodeURIComponent(shareLink);
  const openSocialMedia = (route) => () => window.open(route, '_blank');
  const twitterURL = `twitter://post?${encodedSharedLink}`;
  const facebookURL = `https://m.facebook.com/sharer/sharer.php?u=${encodedSharedLink}`;

  return (
    <ReferralContainer>
      <ReferralSection>
        <ReferralSubSection>
          <Title>Invite your friends</Title>
          <ReferralText>
            Share your personal invitation link and win 49 DAI with each friend that invests with
            us.
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
            <SocialMedia onClick={openSocialMedia(facebookURL)}>
              <Icon name="facebook f" size="big" />
            </SocialMedia>
            <SocialMedia onClick={openSocialMedia(twitterURL)}>
              <Icon name="twitter" size="big" />
            </SocialMedia>
          </SocialMediaWrapper>
        </ReferralSubSection>
        <ReferralSubSection>
          <LabelSection>Successful Referrals</LabelSection>
          <Row>
            <TotalInput placeholder="Total" disabled />
            <TotalNumber>{totalCount}</TotalNumber>
          </Row>
        </ReferralSubSection>
      </ReferralSectionShare>
    </ReferralContainer>
  );
};

export default ReferralProgram;
