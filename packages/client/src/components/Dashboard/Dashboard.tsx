import React, { useContext, useCallback, createContext } from 'react';
import { Header } from 'semantic-ui-react';
import { Button, DashboardContainer } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import Tabs from './Dashboard.Tabs';
import { AppContext } from '../App';
import useAsyncEffect from '../../hooks/useAsyncEffect';

export const DashboardContext: any = createContext({});

const Dashboard = () => {
  const {
    history,
    actions: {
      loan: { onGetLiveAuctionsByAccount }
    },
    store,
    store: {
      loan: { auctions }
    }
  }: any = useContext(AppContext);

  const onCreateLoan = useCallback(() => history.push('/create-loan'), []);

  useAsyncEffect(() => {
    if (history.location.pathname.includes('/dashboard')) {
      onGetLiveAuctionsByAccount();
    }
  }, [store.user.cryptoAddress.address]);

  return (
    <DashboardContext.Provider value={{ auctions }}>
      <KycMessage />
      <DashboardContainer>
        <Header as="h1">Recent Loans</Header>
        <Tabs />
        <Button onClick={onCreateLoan}>create loan</Button>
      </DashboardContainer>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
