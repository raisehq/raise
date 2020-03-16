import React, { useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import Queryies from '../../helpers/queryies';
import Tab from '../Dashboard/Dashboard.Tab';
import { BorrowerLoansBox } from './BorrowerProfile.styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';

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
    }
  }: any = useRootContext();
  const {
    webSocket: { webSocket }
  }: any = useAppContext();

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

  if (!account) {
    return null;
  }

  return auctions && auctions.length > 0 ? (
    <BorrowerLoansBox>
      <Header as="h2">Investment opportunities</Header>
      <Tab auctions={auctions} states={[0]} type="suggested" />
    </BorrowerLoansBox>
  ) : null;
};

export default BorrowerLoans;
