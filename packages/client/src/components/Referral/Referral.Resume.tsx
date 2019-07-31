import React, { useContext, useState, useEffect } from 'react';
import { fromWei } from 'web3-utils';
import { List, Grid } from 'semantic-ui-react';
import { UI, getViewResponse } from './Referral.Response';
import useReferralContract from '../../hooks/useReferralContract';

import {
  ButtonGreen,
  RewardWrapper,
  MessageCoin,
  RewardMessage,
  ContainerListFriends,
  FriendsListItem,
  RewardAmount,
  Separator
} from './Referral.styles';
import { AppContext } from '../App';

const getView = friends => {
  if (friends.length === 0) {
    return (
      <RewardMessage>None of your friends have registered yet</RewardMessage>
    );
  }
  return (
    <List>
      {friends.map((friend, i) => (
        <FriendsListItem key={i}>
            <List.Icon name="check" color="green" />
            <List.Content>{friend.name ? 
              (friend.name.length > 10 ? `${friend.name.substring(0, 7)}...` : friend.name)
              : `${friend.substring(0, 6)}...${friend.substring(friend.length - 4)}`}</List.Content>
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
    web3Status: { account }
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
    status === UI.Success && fetchReferrals();
  }, [status]);
  const balanceWei = fromWei(balance.toString(), 'ether');
  return (
    <RewardWrapper>
      <Grid.Column width={16}>
        <Grid.Row>
          <RewardMessage>You have earned: 
            <RewardAmount> {balanceWei}</RewardAmount>
            <MessageCoin> HERO</MessageCoin>
          </RewardMessage>
        </Grid.Row>
        <Grid.Row>
          <Separator />
        </Grid.Row>
        <RewardMessage >Referred friends:</RewardMessage>
        <ContainerListFriends>
          {getView(referrals || [])}
        </ContainerListFriends>
        <Grid.Row>
          {/* <Grid>
          <Grid.Column> */}
            <ButtonGreen
              onClick={onWithdraw}
              disabled={Number(balanceWei) > 0 ? false : true}
            >
              {Number(balanceWei) > 0 ? `Claim ${balanceWei} Tokens` : 'Claim'}
            </ButtonGreen>
          {/* </Grid.Column>
          </Grid> */}
        </Grid.Row>
        <Grid.Row>
          {getViewResponse(status)}
        </Grid.Row>
      </Grid.Column>
    </RewardWrapper>
  );
};

export default Resume;
