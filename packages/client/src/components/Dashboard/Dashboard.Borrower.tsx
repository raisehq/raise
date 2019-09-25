import React, { useContext, useCallback, useEffect } from 'react';
import {
  Button,
  DashboardContainer,
  DashboardWrapper,
  DashboardTab,
  Header
} from './Dashboard.styles';
import KycMessage from '../KycMessage';
import GetStarted from '../GetStarted';
import { AppContext } from '../App';
import Tab from './Dashboard.Tab';
import Queryies from '../../helpers/queryies';

const Dashboard = () => {
  const {
    history,
    actions: {
      loan: { onGetLiveAuctionsByAccountSubscription, onGetLoansByAccountSubscription }
    },
    store: {
      loan: { auctions, borrowerLoans },
      user: {
        cryptoAddress: { address }
      }
    },
    webSocket: { webSocket }
  }: any = useContext(AppContext);

  const onCreateLoan = useCallback(() => history.push('/create-loan'), [history]);

  const panes = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={auctions} states={[0]} type="borrower" />
    },
    {
      menuItem: 'Loans',
      render: () => <Tab auctions={borrowerLoans} states={[1, 2, 3, 4, 5, 6]} type="borrower" />
    }
  ];

  useEffect(() => {
    if (webSocket) {
      const { query, subscriptionName } = Queryies.subscriptions.loansByAccount;
      const variables = {
        address
      };
      const callback = onGetLoansByAccountSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, address, onGetLoansByAccountSubscription]);

  useEffect(() => {
    if (webSocket) {
      const { query, subscriptionName } = Queryies.subscriptions.liveAuctionsByAccount;
      const variables = {
        address
      };
      const callback = onGetLiveAuctionsByAccountSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, address, onGetLiveAuctionsByAccountSubscription]);

  return (
    <DashboardWrapper>
      <KycMessage />
      <GetStarted />
      <DashboardContainer>
        <Header as="h1" id="my-activity">
          My Activity
        </Header>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
        <Button id="btn-create-loan" onClick={onCreateLoan}>
          create loan
        </Button>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
