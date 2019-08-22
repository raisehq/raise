import React, { Fragment, useContext, useCallback } from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import Tabs from './Dashboard.Tabs';
import { AppContext } from '../App';

const Dashboard = () => {
  const { history }: any = useContext(AppContext);

  const onCreateLoan = useCallback(() => history.push('/create-loan'), []);

  return (
    <Fragment>
      <KycMessage />
      <Header as="h1">Recent Loans</Header>
      <Tabs />
      <Button onClick={onCreateLoan}>create loan</Button>
    </Fragment>
  );
};

export default Dashboard;
