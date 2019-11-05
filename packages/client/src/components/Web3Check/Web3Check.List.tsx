import React, { useContext } from 'react';
import { List, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { match, ANY, TAIL } from 'pampy';
// import useWeb3Checker from '../../hooks/useWeb3Checker';
import { isSupportedBrowser } from '../../utils';
import Messages from './Web3Check.Messages';
import AppContext from '../AppContext';

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

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const CheckList = () => {
  const {
    web3State: { hasProvider, unlocked, networkMatches, accountMatches, targetNetwork }
  }: any = useContext(AppContext);

  const matchConditions = [
    isSupportedBrowser(),
    hasProvider && unlocked,
    networkMatches,
    accountMatches
  ];
  // prettier-ignore
  const steps = match(matchConditions,
    [false, TAIL], 
    () => ['error', 'pending', 'pending', 'pending'],
    [true, false, TAIL],
    () => ['pass', 'user-action', 'pending', 'pending'],
    [true, true, false, TAIL],
    () => ['pass', 'pass', 'user-action', 'pending'],
    [true, true, true, false],
    () => ['pass', 'pass', 'pass', 'user-action'],
    [true, true, true, true],
    () => ['pass', 'pass', 'pass', 'pass'],
    ANY,
    () => ['pending', 'pending', 'pending', 'pending']);

  const stepsMessage = [
    'Detecting compatible browser',
    'Connect your wallet with Raise',
    `Select ${capitalize(targetNetwork ? targetNetwork[0] : 'NONE')} network in your wallet`,
    'Sign message and bind your wallet to your account'
  ];
  console.log(' SUCCESS : ', steps);
  const StepsDOM = steps.map((value, i) => (
    // eslint-disable-next-line
    <Check key={`check-${i}`} value={value} message={stepsMessage[i]} />
  ));
  if (matchConditions.every((el: any) => el)) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <List>{StepsDOM}</List>
      <Messages />
    </>
  );
};

export default CheckList;
