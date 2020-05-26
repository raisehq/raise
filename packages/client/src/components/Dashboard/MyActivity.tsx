import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { Header } from 'semantic-ui-react';
import { DashboardTab, DashboardContainer, MyActivtyWrapper } from './Dashboard.styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import Tab from './Dashboard.Tab';
import Queryies from '../../helpers/queryies';
import { ClaimRefundModal, ClaimRefundProvider } from '../ClaimRefundInvestor';

const MyActivity = () => {
  const {
    actions: {
      loan: { onGetSuggestedAuctionsSubscription, onGetLenderInvestmentSubscription }
    },
    store: {
      loan: { lenderInvestments },
      user: {
        cryptoAddress: { address }
      }
    }
  }: any = useRootContext();
  const {
    webSocket: { webSocket }
  }: any = useAppContext();

  useEffect(() => {
    if (webSocket) {
      const { query, subscriptionName } = Queryies.subscriptions.lenderInvestmentsByAccount;
      const variables = {
        address
      };
      const callback = onGetLenderInvestmentSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, address]);

  useEffect(() => {
    if (webSocket) {
      const { query, variables, subscriptionName } = Queryies.subscriptions.lenderSuggestions;

      const callback = onGetSuggestedAuctionsSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket]);

  const activityPanels = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={lenderInvestments} states={[0]} type="lender" />
    },
    {
      menuItem: 'Investments',
      render: () => <Tab auctions={lenderInvestments} states={[1, 2, 3, 4, 5, 6]} type="lender" />
    }
  ];
  return (
    <MyActivtyWrapper>
      <DashboardContainer>
        <Element name="myActivity" className="element">
          <Header as="h1" id="my-activity">
            My Activity
          </Header>
        </Element>
        <ClaimRefundProvider>
          <ClaimRefundModal />
          <DashboardTab
            renderActiveOnly
            menu={{ secondary: true, pointing: true }}
            panes={activityPanels}
          />
        </ClaimRefundProvider>
      </DashboardContainer>
    </MyActivtyWrapper>
  );
};

export default MyActivity;
