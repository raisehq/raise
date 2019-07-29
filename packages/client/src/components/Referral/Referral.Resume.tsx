import React, { useContext, useState, useEffect } from 'react';
import { fromWei } from 'web3-utils';
import { List, Container, Divider } from 'semantic-ui-react';
import { UI, getViewResponse } from './Referral.Response';
import useReferralContract from '../../hooks/useReferralContract';

import {
  ButtonGreen,
  RewardWrapper,
  MessageCoin,
  RewardMessage,
  ContainerListFriends,
  FriendsListItem,
  RewardAmount
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
      <Container textAlign='center'>
          <RewardMessage>You have earned: 
            <RewardAmount> {balanceWei}</RewardAmount>
            <MessageCoin> HERO</MessageCoin>
          </RewardMessage>
      </Container>
      <Divider />
      <ContainerListFriends>
        <Container textAlign='center'>
          <RewardMessage >Referred friends:</RewardMessage>
        </Container>
        {getView(referrals || [])}
      </ContainerListFriends>
      <ButtonGreen
        onClick={onWithdraw}
        disabled={Number(balanceWei) > 0 ? false : true}
      >
        {Number(balanceWei) > 0 ? `Claim ${balanceWei} Tokens` : 'Claim'}
      </ButtonGreen>
      {getViewResponse(status)}
    </RewardWrapper>
  );
};

export default Resume;
