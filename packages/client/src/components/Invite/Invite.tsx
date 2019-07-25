import React, { useState, useContext } from 'react';
import { getHost } from '../../utils/index';

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
  ShareLink,
  ShareYourUniqueLi,
  ShareInput,
  Social,
  CopyButton,
  Raf,
  StyledAddress as Web3Address
} from './Invite.styles';
import { Input } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AppContext } from '../App';

const REFERAFRIEND = `${getHost('APP')}/join?referralCode`;


const quote = 'Hey, here is your invitation to join Raise. This link will allow you to have early access to Raise marketplace and earn Hero Tokens for free 😊'
const Invite = () => {
  const {
    store: { user: { details: { referral_code }}}
  }: any = useContext(AppContext);
  const shareLink = `${REFERAFRIEND}=${referral_code ? referral_code : ''}`;
  const [state, setState] = useState({
    value: shareLink,
    copied: false
  });

  return (
    <Raf>
        <div className="process">
          <StartEarningNow as="h1">Start earning now !</StartEarningNow>

          <InviteYourFriends as="h1">
            Invite your friends and get 100 tokens for each.

          </InviteYourFriends>

          <ShareLink>
            <ShareYourUniqueLi>Share your unique link</ShareYourUniqueLi>
            <ShareInput>
              <Input value={shareLink} />

              <CopyToClipboard
                text={shareLink}
                onCopy={() => setState({ value: shareLink, copied: true })}
              >
                <CopyButton>
                  { !state.copied ? 'Copy' : 'Copied!' } 
                </CopyButton>
              </CopyToClipboard>
            </ShareInput>
          </ShareLink>
          <Social>
            <FacebookShareButton
              quote={quote}
              url={shareLink}
            >
              <img alt="Facebook ico" src="https://static.herodev.es/images/ico_facebook.svg" />
            </FacebookShareButton>
            <TwitterShareButton
              title={quote}
              url={shareLink}
            >
              <img alt="Twitter ico" src="https://static.herodev.es/images/ico_twitter.svg" />
            </TwitterShareButton>
            <EmailShareButton
              subject='Invitation to Raise'
              body={quote}
              url={shareLink}
            >
              <img  alt="Email ico" src="https://static.herodev.es/images/ico_mail.svg" />
            </EmailShareButton>
            <TelegramShareButton
              title={quote}
              url={shareLink}
            >
              <img alt="Telegram ico" src="https://static.herodev.es/images/ico_telegram.svg" />
            </TelegramShareButton>
            <WhatsappShareButton
              title={quote}
              separator=' - '
              url={shareLink}
            >
              <img alt="Whatsapp ico" src="https://static.herodev.es/images/ico_whatsapp.svg" />
            </WhatsappShareButton>
          </Social>
        </div>
        <div className="visuals">
          <Web3Address />
          <RafImage src="https://static.herodev.es/images/img_raf.png" />
        </div>
    </Raf>
  );
};

export default Invite;
