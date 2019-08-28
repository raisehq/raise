import React, { useContext, useCallback, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { Button, DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import { AppContext } from '../App';
import Suggesteds from './Dashboard.Suggesteds';
import Tab from './Dashboard.Tab';
import { DashboardTab } from './Dashboard.styles';

const Dashboard = () => {
  const {
    history,
    actions: {
      loan: { onGetSuggestedAuctions, onGetLiveAuctionsByAccount }
    },
    store: {
      loan: { suggested, auctions }
    }
  }: any = useContext(AppContext);

  const onCreateLoan = useCallback(() => history.push('/marketplace'), []);

  useEffect(() => {
    onGetSuggestedAuctions();
    onGetLiveAuctionsByAccount();
  }, []);

  const panes = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={auctions} states={[0]} type="auction" />
    },
    {
      menuItem: 'Investments',
      render: () => <Tab auctions={auctions} states={[1,2,3,4,5,6]} type="auction" />
    }
  ];
  return (
    <DashboardWrapper>
      <KycMessage />
      <DashboardContainer>
        <Header as="h1">Suggested auctions</Header>
        <Suggesteds auctions={suggested} states={[0]}/>
        <Button onClick={onCreateLoan}>marketplace</Button>
        <Header as="h1">My activity</Header>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
