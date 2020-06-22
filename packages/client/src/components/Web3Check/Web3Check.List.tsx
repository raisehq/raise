import React from 'react';
import { isMobile } from 'react-device-detect';
import { List, Icon, Dimmer, Loader, Button, Message } from 'semantic-ui-react';

import { match, ANY, TAIL } from 'pampy';

import Messages from './Web3Check.Messages';
import { useAppContext } from '../../contexts/AppContext';
import {
  Web3CheckWalletWrapper,
  SelectYourWalletContainer,
  SelectYourWalletList,
  SelectWalletOptionListItem,
  SelectYourWalletTitle,
  CardTitle
} from './Web3Check.styles';
import OnboardingProgressBar from '../OnboardingProgressBar';

const Check = ({ value, message }: any) => {
  const iconProps = match(
    value,
    'error',
    () => ({ name: 'times', color: 'red' }),
    'pass',
    () => ({ name: 'check', color: 'green' }),
    'user-action',
    () => ({ name: 'exclamation', color: 'yellow' }),
    'pending',
    () => ({ name: 'minus', color: 'grey' })
  );

  return (
    <List.Item>
      <List.Content verticalAlign="middle">
        <Icon circular {...iconProps} size="small" />
        {message}
      </List.Content>
    </List.Item>
  );
};

// const capitalize = (s) => {
//   if (typeof s !== 'string') return '';
//   return s.charAt(0).toUpperCase() + s.slice(1);
// };

const CheckList = ({ onBack, onSuccess }: any) => {
  const {
    web3Status: { hasProvider, unlocked, networkMatches, accountMatches }
  }: any = useAppContext();

  const matchConditions = [hasProvider && unlocked, accountMatches];

  // prettier-ignore
  const steps = match(matchConditions,
    [false, TAIL],
    () => ['user-action', 'pending'],
    [true, false],
    () => ['pass', 'user-action'],
    [true, true],
    () => ['pass', 'pass', 'pass'],
    ANY,
    () => ['pending', 'pending']);

  const stepsMessage = [
    'Connect your wallet to Raise',
    'This will be the wallet account you will be using in all Raise operations '
  ];

  const StepsDOM = steps.map((value, i) => (
    <Check key={value} value={value} message={stepsMessage[i]} />
  ));

  if ([...matchConditions, ...[networkMatches]].every((el: any) => el)) {
    onSuccess();
  }

  if (!hasProvider) {
    return (
      <Dimmer active={!hasProvider} inverted>
        <Loader>Checking wallet ...</Loader>
      </Dimmer>
    );
  }

  return (
    <Web3CheckWalletWrapper>
      <OnboardingProgressBar step={1} isMobile={isMobile} />
      <SelectYourWalletContainer>
        <SelectYourWalletTitle>
          <CardTitle>Connect your Ethereum wallet </CardTitle>
        </SelectYourWalletTitle>
        <SelectYourWalletList>
          <SelectWalletOptionListItem>
            <List>{StepsDOM}</List>
          </SelectWalletOptionListItem>
          {!networkMatches && (
            <Message negative>
              <Message.Header>
                Make sure you are using the Main Net network in your wallet
              </Message.Header>
            </Message>
          )}
          <SelectWalletOptionListItem>
            <Messages />
          </SelectWalletOptionListItem>
          <SelectWalletOptionListItem>
            <Button basic color="black" onClick={onBack}>
              Go back
            </Button>
          </SelectWalletOptionListItem>
        </SelectYourWalletList>
      </SelectYourWalletContainer>
    </Web3CheckWalletWrapper>
  );
};

export default CheckList;
