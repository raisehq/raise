import React, { useState, useContext } from 'react';
import { getHost } from '../../utils/index';

import { getImages } from '../../utils';
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
  // ShareLink,
  ContainerGrid,
  ShareYourUniqueLi,
  ShareInput2,
  Social,
  CopyButton,
  Raf,
  StyledAddress as Web3Address,
  RafImageContainer
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
      <ContainerGrid width={16}>
        <Grid.Row>
          <Grid.Column floated='right'>
            <Web3Address />
          </Grid.Column>
        </Grid.Row>
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
        <Responsive as={Grid.Row} minWidth={1024}>
          <Grid.Column width={10}>
            <Grid.Row>
              <ShareYourUniqueLi>Share your unique link</ShareYourUniqueLi>
            </Grid.Row>  
            <Grid.Row>
              <Grid>
                <Grid.Column width={12}>
                  <ShareInput2>
                    <Input value={shareLink} fluid />
                  </ShareInput2>
                </Grid.Column>
                <Grid.Column width={4}  verticalAlign='middle'>
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
                    <Grid.Row>
                      <Grid.Column width={3}>
                        <FacebookShareButton quote={quote} url={shareLink}>
                          <img alt="Facebook ico" src={getImages('ico_facebook.svg')} />
                        </FacebookShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <TwitterShareButton title={quote} url={shareLink}>
                          <img alt="Twitter ico" src={getImages('ico_twitter.svg')} />
                        </TwitterShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <EmailShareButton
                          subject="Invitation to Raise"
                          body={quote}
                          url={shareLink}
                        >
                          <img alt="Email ico" src={getImages('ico_mail.svg')} />
                        </EmailShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <TelegramShareButton title={quote} url={shareLink}>
                          <img alt="Telegram ico" src={getImages('ico_telegram.svg')} />
                        </TelegramShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <WhatsappShareButton title={quote} separator=" - " url={shareLink}>
                          <img alt="Whatsapp ico" src={getImages('ico_whatsapp.svg')} />
                        </WhatsappShareButton>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              </Social>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign='bottom'>
            <RafImageContainer>
              <RafImage src={getImages('img_raf.png')} />
            </RafImageContainer>
          </Grid.Column>
        </Responsive>
        <Responsive as={Grid.Row} maxWidth={1024}>
          <Grid.Column width={16}>
            <Grid.Row>
              <ShareYourUniqueLi>Share your unique link</ShareYourUniqueLi>
            </Grid.Row>  
            <Grid.Row>
              <Grid>
                <Grid.Column width={9}>
                  <ShareInput2>
                    <Input value={shareLink} fluid />
                  </ShareInput2>
                </Grid.Column>
                <Grid.Column width={4}  verticalAlign='middle'>
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
                    <Grid.Row>
                      <Grid.Column width={3}>
                        <FacebookShareButton quote={quote} url={shareLink}>
                          <img alt="Facebook ico" src={getImages('ico_facebook.svg')} />
                        </FacebookShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <TwitterShareButton title={quote} url={shareLink}>
                          <img alt="Twitter ico" src={getImages('ico_twitter.svg')} />
                        </TwitterShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <EmailShareButton
                          subject="Invitation to Raise"
                          body={quote}
                          url={shareLink}
                        >
                          <img alt="Email ico" src={getImages('ico_mail.svg')} />
                        </EmailShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <TelegramShareButton title={quote} url={shareLink}>
                          <img alt="Telegram ico" src={getImages('ico_telegram.svg')} />
                        </TelegramShareButton>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <WhatsappShareButton title={quote} separator=" - " url={shareLink}>
                          <img alt="Whatsapp ico" src={getImages('ico_whatsapp.svg')} />
                        </WhatsappShareButton>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              </Social>
            </Grid.Row>
          </Grid.Column>
        </Responsive>
      </ContainerGrid>
    </Raf>
  );
};

export default Invite;
