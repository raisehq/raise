import React, { useContext, useCallback } from 'react';
import { Header } from 'semantic-ui-react';
import { Button, DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import { AppContext } from '../App';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import Suggesteds from './Dashboard.Suggesteds';
import Tab from './Dashboard.Tab';
import { DashboardTab } from './Dashboard.styles';

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

  const onCreateLoan = useCallback(() => history.push('/marketplace'), []);

  useAsyncEffect(() => {
    if (history.location.pathname.includes('/dashboard')) {
      onGetLiveAuctionsByAccount();
    }
  }, [store.user.cryptoAddress.address]);

  const panes = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={auctions} state={0} type="auction" />
    },
    {
      menuItem: 'Investments',
      render: () => <Tab auctions={auctions} state={1} type="auction" />
    }
  ];

  return (
    <DashboardWrapper>
      <KycMessage />
      <DashboardContainer>
        <Header as="h1">Suggested auctions</Header>
        <Suggesteds auctions={auctions} />
        <Button onClick={onCreateLoan}>marketplace</Button>
        <Header as="h1">My activity</Header>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
