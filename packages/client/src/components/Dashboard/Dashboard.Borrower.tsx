import React, { useCallback, useEffect } from 'react';
import {
  Button,
  DashboardContainer,
  DashboardWrapper,
  DashboardTab,
  Header
} from './Dashboard.styles';
import Tab from './Dashboard.Tab';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import Queryies from '../../helpers/queryies';
import { Element } from 'react-scroll';

const Dashboard = () => {
  const {
    actions: {
      loan: { onGetLiveAuctionsByAccountSubscription, onGetLoansByAccountSubscription }
    },
    store: {
      loan: { auctions, borrowerLoans },
      user: {
        cryptoAddress: { address }
      }
    }
  }: any = useRootContext();
  const {
    webSocket: { webSocket }
  }: any = useAppContext();
  const { history }: any = useRouter();
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
  }, [webSocket, address]);

  useEffect(() => {
    if (webSocket) {
      const { query, subscriptionName } = Queryies.subscriptions.liveAuctionsByAccount;
      const variables = {
        address
      };
      const callback = onGetLiveAuctionsByAccountSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, address]);

  return (
    <DashboardWrapper>
      <DashboardContainer>
        <Element name="myActivity" className="element">
          <Header as="h1" id="my-activity">
            My Activity
          </Header>
        </Element>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
        <Button id="btn-create-loan" onClick={onCreateLoan}>
          create loan
        </Button>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
