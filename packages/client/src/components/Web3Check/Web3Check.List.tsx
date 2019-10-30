import React, { useContext } from 'react';
import { List, Icon } from 'semantic-ui-react';
import { match, ANY, TAIL } from 'pampy';
import AppContext from '../AppContext';
import { isSupportedBrowser } from '../../utils';

const Check = ({ value, message }: any) => {
  console.log(' --------------- > ', value);
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
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches, targetNetwork }
  }: any = useContext(AppContext);
  console.log();
  const matchConditions = [
    isSupportedBrowser(),
    hasProvider && unlocked,
    networkMatches,
    accountMatches
  ];
  console.log(' MATCH : ', [
    isSupportedBrowser(),
    hasProvider && unlocked,
    networkMatches,
    accountMatches
  ]);
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
    `Select ${capitalize(targetNetwork)} network in your wallet`,
    'Sign message and bind your wallet to your account'
  ];

  const StepsDOM = steps.map((value, i) => (
    // eslint-disable-next-line
    <Check key={`check-${i}`} value={value} message={stepsMessage[i]} />
  ));

  return <List>{StepsDOM}</List>;
};

export default CheckList;
