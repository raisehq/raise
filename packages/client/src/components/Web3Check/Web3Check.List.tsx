import React from 'react';
import { isMobile } from 'react-device-detect';
import { List, Icon, Dimmer, Loader, Button } from 'semantic-ui-react';
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

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const CheckList = ({ onBack, onSuccess }: any) => {
  const {
    web3Status: { hasProvider, unlocked, networkMatches, accountMatches, targetNetwork }
  }: any = useAppContext();

  const matchConditions = [hasProvider && unlocked, networkMatches, accountMatches];

  // prettier-ignore
  const steps = match(matchConditions,
    [false, TAIL],
    () => ['user-action', 'pending', 'pending'],
    [true, false, TAIL],
    () => ['pass', 'user-action', 'pending'],
    [true, true, false],
    () => ['pass', 'pass', 'user-action'],
    [true, true, true],
    () => ['pass', 'pass', 'pass'],
    ANY,
    () => ['pending', 'pending', 'pending']);

  const stepsMessage = [
    'Connect your wallet with Raise',
    `Select ${capitalize(targetNetwork || 'NONE')} network in your wallet`,
    'Sign message and bind your wallet to your account'
  ];

  const StepsDOM = steps.map((value, i) => (
    <Check key={`check-${i}`} value={value} message={stepsMessage[i]} />
  ));
  if (matchConditions.every((el: any) => el)) {
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
          <CardTitle>Connect your wallet </CardTitle>
        </SelectYourWalletTitle>
        <SelectYourWalletList>
          <SelectWalletOptionListItem>
            <List>{StepsDOM}</List>
          </SelectWalletOptionListItem>
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
