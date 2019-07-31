import React, { useState, useContext } from 'react';
import { getHost } from '../../utils/index';

import useImages from '../../hooks/useImages';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
  TelegramShareButton
} from 'react-share';
import {
  StartEarningNow,
  RafImage,
  InviteYourFriends,
  RafImageContainer,
  // ContainerGrid,
  ShareYourUniqueLi,
  ShareInput,
  Social,
  CopyButton,
  Raf,
  StyledAddress as Web3Address,
  AddressRow,
  LinkColumn,
  InputColumn,
  ButtonColumn,
  InviteContent
} from './Invite.styles';
import { Input, Responsive, Grid } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AppContext } from '../App';

const REFERAFRIEND = `${getHost('APP')}/join?referralCode`;

const quote =
  'Hey, here is your invitation to join Raise. This link will allow you to have early access to Raise marketplace and earn Hero Tokens for free 😊';
const Invite = () => {
  const {
    store: {
      user: {
        details: { referral_code }
      }
    }
  }: any = useContext(AppContext);
  const shareLink = `${REFERAFRIEND}=${referral_code ? referral_code : ''}`;
  const [state, setState] = useState({
    value: shareLink,
    copied: false
  });

  return (
    <Raf>
      <AddressRow>
        <Grid.Column>
          <Web3Address />
        </Grid.Column>
      </AddressRow>
      <Grid.Row>
        <Grid.Column>
          <Grid.Row>
            <StartEarningNow as="h1">Start earning now !</StartEarningNow>
          </Grid.Row>
          <Grid.Row>
            <Grid>
              <Grid.Column width={10}>
                <InviteYourFriends as="h1">
                  Invite your friends and get 100 tokens for each.
                </InviteYourFriends>
              </Grid.Column>
            </Grid>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      <Responsive as={InviteContent} minWidth={1024}>
        <LinkColumn width={8} verticalAlign="bottom">
          <Grid.Row>
            <ShareYourUniqueLi>Share your unique link</ShareYourUniqueLi>
          </Grid.Row>
          <Grid.Row>
            <Grid>
              <InputColumn width={12}>
                <ShareInput>
                  <Input value={shareLink} fluid />
                </ShareInput>
              </InputColumn>
              <ButtonColumn width={4} verticalAlign="middle" floated="right">
                <CopyToClipboard
                  text={shareLink}
                  onCopy={() => setState({ value: shareLink, copied: true })}
                >
                  <CopyButton>{!state.copied ? 'Copy' : 'Copied!'}</CopyButton>
                </CopyToClipboard>
              </ButtonColumn>
            </Grid>
          </Grid.Row>
          <Grid.Row>
            <Social>
              <Grid columns={5} stackable>
                <Grid.Column width={3}>
                  <FacebookShareButton quote={quote} url={shareLink}>
                    <img
                      alt="Facebook ico"
                      src={useImages('ico_facebook.svg')}
                    />
                  </FacebookShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <TwitterShareButton title={quote} url={shareLink}>
                    <img alt="Twitter ico" src={useImages('ico_twitter.svg')} />
                  </TwitterShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <EmailShareButton
                    subject="Invitation to Raise"
                    body={quote}
                    url={shareLink}
                  >
                    <img alt="Email ico" src={useImages('ico_mail.svg')} />
                  </EmailShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <TelegramShareButton title={quote} url={shareLink}>
                    <img
                      alt="Telegram ico"
                      src={useImages('ico_telegram.svg')}
                    />
                  </TelegramShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <WhatsappShareButton
                    title={quote}
                    separator=" - "
                    url={shareLink}
                  >
                    <img
                      alt="Whatsapp ico"
                      src={useImages('ico_whatsapp.svg')}
                    />
                  </WhatsappShareButton>
                </Grid.Column>
              </Grid>
            </Social>
          </Grid.Row>
        </LinkColumn>
        <Grid.Column width={8} verticalAlign="bottom">
          <RafImageContainer>
            <RafImage src={useImages('img_raf.png')} />
          </RafImageContainer>
        </Grid.Column>
      </Responsive>
      <Responsive as={Grid.Row} maxWidth={1023}>
        <Grid.Column width={16}>
          <Grid.Row>
            <ShareYourUniqueLi>Share your unique link</ShareYourUniqueLi>
          </Grid.Row>
          <Grid.Row>
            <Grid>
              <Grid.Column width={9}>
                <ShareInput>
                  <Input value={shareLink} fluid />
                </ShareInput>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign="middle">
                <CopyToClipboard
                  text={shareLink}
                  onCopy={() => setState({ value: shareLink, copied: true })}
                >
                  <CopyButton>{!state.copied ? 'Copy' : 'Copied!'}</CopyButton>
                </CopyToClipboard>
              </Grid.Column>
            </Grid>
          </Grid.Row>
          <Grid.Row>
            <Social>
              <Grid columns={5}>
                <Grid.Column width={3}>
                  <FacebookShareButton quote={quote} url={shareLink}>
                    <img
                      alt="Facebook ico"
                      src={useImages('ico_facebook.svg')}
                    />
                  </FacebookShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <TwitterShareButton title={quote} url={shareLink}>
                    <img alt="Twitter ico" src={useImages('ico_twitter.svg')} />
                  </TwitterShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <EmailShareButton
                    subject="Invitation to Raise"
                    body={quote}
                    url={shareLink}
                  >
                    <img alt="Email ico" src={useImages('ico_mail.svg')} />
                  </EmailShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <TelegramShareButton title={quote} url={shareLink}>
                    <img
                      alt="Telegram ico"
                      src={useImages('ico_telegram.svg')}
                    />
                  </TelegramShareButton>
                </Grid.Column>
                <Grid.Column width={3}>
                  <WhatsappShareButton
                    title={quote}
                    separator=" - "
                    url={shareLink}
                  >
                    <img
                      alt="Whatsapp ico"
                      src={useImages('ico_whatsapp.svg')}
                    />
                  </WhatsappShareButton>
                </Grid.Column>
              </Grid>
            </Social>
          </Grid.Row>
        </Grid.Column>
      </Responsive>
    </Raf>
  );
};

export default Invite;
