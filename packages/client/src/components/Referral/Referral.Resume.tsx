import React, { useContext, useState, useEffect } from 'react';
import { fromWei } from 'web3-utils';
import { List, Grid } from 'semantic-ui-react';
import { UI, getViewResponse } from './Referral.Response';
import useReferralContract from '../../hooks/useReferralContract';

import {
  ButtonGreen,
  MessageCoin,
  RewardMessage,
  ContainerListFriends,
  FriendsListItem,
  RewardAmount,
  Separator,
  ResumeContainer,
  RewardMessageSubTitle,
  RewardMessageFriends
} from './Referral.styles';
import { AppContext } from '../App';

const getView = friends => {
  if (friends.length === 0) {
    return (
      <RewardMessageSubTitle>
        Invite friends and start earning
      </RewardMessageSubTitle>
    );
  }
  return (
    <List>
      {friends.map((friend, i) => (
        <FriendsListItem key={i}>
          <List.Icon name="check" color="green" />
          <List.Content>
            {friend.name
              ? friend.name.length > 14
                ? `${friend.name.substring(0, 11)}...`
                : friend.name
              : `${friend.address.substring(0, 6)}...${friend.address.substring(
                  friend.address.length - 4
                )}`}
          </List.Content>
        </FriendsListItem>
      ))}
    </List>
  );
};

const Resume = () => {
  const ReferralContract = useReferralContract();
  const [status, setStatus] = useState(UI.None);

  const {
    store: {
      blockchain: { referrals, totalBountyToWithdraw: balance }
    },
    actions: {
      blockchain: { fetchReferrals }
    },
    web3Status: { account, network }
  }: any = useContext(AppContext);

  const onWithdraw = async () => {
    setStatus(UI.Waiting);
    try {
      await ReferralContract.withdraw(account);
      setStatus(UI.Success);
    } catch (error) {
      setStatus(UI.Error);
    }
  };

  useEffect(() => {
    network && status === UI.Success && fetchReferrals(network);
  }, [status, network]);
  const balanceWei = fromWei(balance.toString(), 'ether');
  return (
    <ResumeContainer>
      <Grid.Row>
        <Grid.Column>
          <RewardMessage>
            You have earned:
            <RewardAmount> {balanceWei}</RewardAmount>
            <MessageCoin> HERO</MessageCoin>
          </RewardMessage>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Separator />
        </Grid.Column>
      </Grid.Row>
      <ContainerListFriends>
        <Grid.Column>
          <RewardMessageFriends>Referred friends</RewardMessageFriends>
          {getView(referrals || [])}
        </Grid.Column>
      </ContainerListFriends>
      <Grid.Row>
        <Grid.Column>
          <ButtonGreen
            onClick={onWithdraw}
            disabled={Number(balanceWei) > 0 ? false : true}
          >
            {Number(balanceWei) > 0 ? `Claim ${balanceWei} Tokens` : 'Claim'}
          </ButtonGreen>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{getViewResponse(status)}</Grid.Column>
      </Grid.Row>
    </ResumeContainer>
  );
};

export default Resume;
