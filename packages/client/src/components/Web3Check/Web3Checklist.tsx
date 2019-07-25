import React, { useContext } from 'react';
import { AppContext } from '../App';
import { List, Icon } from 'semantic-ui-react';
import { match, ANY, TAIL } from 'pampy';

const Check = ({value, message}) => {
  const iconProps = match(value,
    'pass',        () => ({ name: 'check', color: 'green' }),
    'user-action', () => ({ name: 'exclamation', color: 'yellow' }),
    'pending',     () => ({ name: 'minus', color: 'grey' })
  );
  return (
    <List.Item>
      <List.Content verticalAlign='middle'>
        <Icon circular {...iconProps} size='small' />
        {message}
      </List.Content>
    </List.Item>
  )
}

const Checklist = () => {
  const {
    web3Status: {
      hasProvider,
      unlocked,
      accountMatches,
      networkMatches,
      targetNetwork
    },
  }: any = useContext(AppContext);

  const steps = match([hasProvider, unlocked, networkMatches, accountMatches],
    [false, TAIL],             () => ['user-action', 'pending', 'pending', 'pending'],
    [true, false, TAIL],       () => ['pass', 'user-action', 'pending', 'pending'], 
    [true, true, false, TAIL], () => ['pass', 'pass', 'user-action', 'pending'], 
    [true, true, true, false], () => ['pass', 'pass', 'pass', 'user-action'],
    [true, true, true, true],  () => ['pass', 'pass', 'pass', 'pass'],
    ANY,                       () => ['pending', 'pending', 'pending', 'pending'],
  );

  const stepsMessage = [
    'Install Web3 provider',
    'Connect your wallet with Raise',
    `Change to ${targetNetwork} network`,
    'Link your address with Raise'
  ];
  const StepsDOM = steps.map((value, index) => <Check key={index} value={value} message={stepsMessage[index]} /> );

  return (
    <List>
      {StepsDOM}
    </List>
  );
}

export default Checklist;