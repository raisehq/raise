import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import useCookie from 'react-use-cookie';
import { Header } from 'semantic-ui-react';
import { DashboardContainer, DashboardWrapper, DashboardTab } from './Dashboard.styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import GetStarted from '../GetStarted';
import Suggesteds from './Dashboard.Suggesteds';
import Tab from './Dashboard.Tab';
import Queryies from '../../helpers/queryies';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { findOne } from '../../helpers/butter';
import WarningModal from '../WarningModal';

const Dashboard = () => {
  const {
    actions: {
      loan: { onGetSuggestedAuctionsSubscription, onGetLenderInvestmentSubscription }
    },
    store: {
      loan: { suggested, lenderInvestments },
      user: {
        cryptoAddress: { address }
      },
      auth: {
        login: { logged }
      }
    }
  }: any = useRootContext();
  const {
    webSocket: { webSocket }
  }: any = useAppContext();
  const [warningCK, setWarningCK] = useCookie('warning', '');
  const [activeWarning, setWarning]: any = useState();
  const [open, setOpen] = useState(false);

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

  useAsyncEffect(async () => {
    try {
      if (!warningCK || warningCK === '') {
        const warning = await findOne('warnings', { 'fields.active': true });
        setOpen(true);
        setWarning(warning);
      }
    } catch (error) {
      // Reminder: Missing companies in Kovan testnet network shows 404 errors
      //console.error('[DASBOARD.LENDER] ', error);
    }
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

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
    <DashboardWrapper>
      <GetStarted />
      <DashboardContainer>
        <Header as="h1">Investment opportunities</Header>
        <Suggesteds auctions={suggested} states={[0]} />
        {logged && (
          <>
            <Element name="myActivity" className="element">
              <Header as="h1" id="my-activity">
                My Activity
              </Header>
            </Element>
            <DashboardTab
              renderActiveOnly
              menu={{ secondary: true, pointing: true }}
              panes={activityPanels}
            />
          </>
        )}
      </DashboardContainer>
      {activeWarning ? (
        <WarningModal
          warning={activeWarning}
          open={open}
          closeModal={closeModal}
          setCookie={setWarningCK}
        />
      ) : null}
    </DashboardWrapper>
  );
};

export default Dashboard;
