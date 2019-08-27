import React, { useContext, useCallback } from 'react';
import { Header } from 'semantic-ui-react';
import { Button, DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import { DashboardTab } from './Dashboard.styles';
import { AppContext } from '../App';
import Tab from './Dashboard.Tab';
import useAsyncEffect from '../../hooks/useAsyncEffect';

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

  const panes = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={auctions} states={[0]} type="auction" />
    },
    {
      menuItem: 'Loans',
      render: () => <Tab auctions={auctions} states={[1,2,3,4,5,6]} type="loan" />
    }
  ];

  useAsyncEffect(() => {
    if (history.location.pathname.includes('/dashboard')) {
      onGetLiveAuctionsByAccount();
    }
  }, [store.user.cryptoAddress.address]);

  return (
    <DashboardWrapper>
      <KycMessage />
      <DashboardContainer>
        <Header as="h1">Recent Loans</Header>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
        <Button onClick={onCreateLoan}>create loan</Button>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
