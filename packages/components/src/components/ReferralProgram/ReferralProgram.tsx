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
  TotalNumber
} from './styles';

const ReferralProgram = () => {
  const shareLink = 'https://raise.it/referral/65415465';
  const [state, setState] = useState<any>({
    value: shareLink,
    copied: false
  });

  return (
    <ReferralContainer>
      <ReferralSection>
        <ReferralSubSection>
          <Title>Referral Program</Title>
          <ReferralText>
            Share this link and earn from each successful investor you invite.
          </ReferralText>
        </ReferralSubSection>
      </ReferralSection>
      <ReferralSection>
        <ReferralSubSection>
          <LabelSection>Copy the link</LabelSection>
          <Row>
            <InputTextCustom placeholder="https://raise.it/referral/65415465" disabled />
            <CopyToClipboard
              text={shareLink}
              onCopy={() => setState({ value: shareLink, copied: true })}
            >
              <CopyButton icon={state.copied ? 'check' : 'copy'} copied={state.copied} />
            </CopyToClipboard>
          </Row>
        </ReferralSubSection>
      </ReferralSection>
      <ReferralSection>
        <ReferralSubSection>
          <LabelSection>Share</LabelSection>
          <SocialMediaWrapper>
            <SocialMedia>
              <Icon name="facebook f" size="big" />
            </SocialMedia>
            <SocialMedia>
              <Icon name="twitter" size="big" />
            </SocialMedia>
          </SocialMediaWrapper>
        </ReferralSubSection>
      </ReferralSection>
      <ReferralSection>
        <ReferralSubSection>
          <LabelSection>Successful Referrals</LabelSection>
          <Row>
            <TotalInput placeholder="Total" disabled />
            <TotalNumber>145</TotalNumber>
          </Row>
        </ReferralSubSection>
      </ReferralSection>
    </ReferralContainer>
  );
};

export default ReferralProgram;
