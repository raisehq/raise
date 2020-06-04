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
      <ReferralSectionShare>
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
