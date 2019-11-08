import React, { useContext, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import Queryies from '../../helpers/queryies';
import Tab from '../Dashboard/Dashboard.Tab';
import { BorrowerLoansBox } from './BorrowerProfile.styles';
import AppContext from '../AppContext';

interface BorrowerLoansProps {
  account: string | null | undefined;
}

const BorrowerLoans: React.SFC<BorrowerLoansProps> = ({ account }: BorrowerLoansProps) => {
  const {
    actions: {
      loan: { onGetLiveAuctionsByAccountSubscription }
    },
    store: {
      loan: { auctions }
    },
    webSocket: { webSocket }
  }: any = useContext(AppContext);

  useEffect(() => {
    if (webSocket && account) {
      const { query, subscriptionName } = Queryies.subscriptions.liveAuctionsByAccount;
      const variables = {
        address: account
      };
      const callback = onGetLiveAuctionsByAccountSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, account]);

  const activeAuctions =
    auctions && auctions.length ? auctions.filter(({ state }) => state === 0) : null;
  return activeAuctions && activeAuctions.length > 0 ? (
    <BorrowerLoansBox>
      <Header as="h2">Active Auctions</Header>
      <Tab auctions={activeAuctions} states={[0]} type="suggested" />
    </BorrowerLoansBox>
  ) : null;
};

export default BorrowerLoans;
