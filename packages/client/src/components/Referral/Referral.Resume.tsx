import React, { useContext, useState, useEffect } from 'react';
import { fromWei } from 'web3-utils';
import { List, Header, Container } from 'semantic-ui-react';
import { UI, getViewResponse } from './Referral.Response';
import useReferralContract from '../../hooks/useReferralContract';

import {
  ButtonGreen,
  RewardWrapper,
  MessageCoin,
  RewardAmount,
  RewardMessage,
  ContainerListFriends,
  FriendsListItem
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
          <List.Content>{friend.name ? friend.name : `${friend.substring(0, 6)}...${friend.substring(friend.length - 4)}`}</List.Content>
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
      <Container textAlign="center">
        <Header as="h1">You have:</Header>
        <RewardAmount>
          {balanceWei} <MessageCoin>Hero Tokens</MessageCoin>
        </RewardAmount>
      </Container>
      <ContainerListFriends>{getView(referrals || [])}</ContainerListFriends>
      <ButtonGreen
        onClick={onWithdraw}
        disabled={Number(balanceWei) > 0 ? false : true}
      >
        Get Reward
      </ButtonGreen>
      {getViewResponse(status)}
    </RewardWrapper>
  );
};

export default Resume;
