import React, { useContext, useCallback, useEffect } from 'react';
import { Button, DashboardContainer, DashboardWrapper } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import { DashboardTab, Header } from './Dashboard.styles';
import { AppContext } from '../App';
import Tab from './Dashboard.Tab';

const Dashboard = () => {
  const {
    history,
    actions: {
      loan: { onGetLiveAuctionsByAccount }
    },
    store: {
      loan: { auctions }
    }
  }: any = useContext(AppContext);

  const onCreateLoan = useCallback(() => history.push('/create-loan'), []);

  const panes = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={auctions} states={[0]} type="borrower" />
    },
    {
      menuItem: 'Loans',
      render: () => <Tab auctions={auctions} states={[1, 2, 3, 4, 5, 6]} type="borrower" />
    }
  ];

  useEffect(() => {
    onGetLiveAuctionsByAccount();
  }, []);

  return (
    <DashboardWrapper>
      <KycMessage />
      <DashboardContainer>
        <Header as="h1">My Activity</Header>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
        <Button onClick={onCreateLoan}>create loan</Button>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
