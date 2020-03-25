import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import Queryies from '../../helpers/queryies';

import useAsyncEffect from '../../hooks/useAsyncEffect';
import useInterval from '../../hooks/useInterval';
import { requestPage } from '../../helpers/butter';
import { BorrowerProfile as BorrowerProfileType } from '../../interfaces/BorrowerProfile';
import {
  BorrowerCard,
  SideInfo,
  Container,
  CompanyName,
  HeaderImage,
  CompanyDetails,
  BorrowerPage,
  SideTitle,
  CardImageCrop,
  BorrowerLogo
} from './BorrowerProfile.styles';
import { KPIList } from './KPI';
import Socials from './Socials';
import Borrower404 from './Borrower404';
import BorrowerLoading from './BorrowerLoading';
import { BorrowerInfo } from './BorrowerInfo';
import { getActiveAuctions } from '../../utils/loanUtils';
import BorrowerHeader from './BorrowerHeader';

const defaultBorrower = {
  companyDetails: {
    companyName: 'Loading...',
    description: '',
    logo: '',
    url: '',
    urlText: '',
    updated: '',
    address: '',
    userId: '',
    ethereumAddress: '',
    foundationDate: '',
    background: ''
  },
  socialNetworks: [],
  extraResources: [],
  kpis: []
};

interface SlugParam {
  slug: string;
}

type BorrowerParams = RouteComponentProps<SlugParam>;

const BorrowerProfile: React.SFC<BorrowerParams> = ({
  match: {
    params: { slug }
  }
}) => {
  const [borrower, setPayload]: [BorrowerProfileType, any] = useState(defaultBorrower);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    companyDetails: {
      companyName,
      description,
      logo,
      url,
      updated,
      address,
      foundationDate,
      ethereumAddress: account,
      background
    },
    extraResources,
    socialNetworks,
    kpis
  } = borrower;
  const lastUpdated = new Date(updated).toLocaleDateString('en-GB');
  const [filteredAuctions, setFilteredAuctions] = useState([]);

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

  useAsyncEffect(async () => {
    try {
      const response = await requestPage('borrower_profile', slug);
      setPayload(response);
      setLoading(false);
    } catch (error) {
      setNotFound(true);
      setLoading(false);
    }
  }, []);

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

  useInterval(() => {
    const filtered = getActiveAuctions(auctions, [0]);
    setFilteredAuctions(filtered);
  }, 1000);

  if (loading) {
    return <BorrowerLoading />;
  }
  if (notFound) {
    return <Borrower404 />;
  }

  return (
    <BorrowerPage>
      <Container>
        <BorrowerCard>
          <HeaderImage>
            <CardImageCrop src={background} />
          </HeaderImage>

          {filteredAuctions.length ? <BorrowerHeader auction={filteredAuctions[0]} /> : null}
          <CompanyDetails extraPadding={filteredAuctions.length >= 0}>
            <BorrowerLogo src={logo} />
            <CompanyName>{companyName}</CompanyName>
            <p>
              Last updated:
              {lastUpdated}
            </p>
            <b>About</b>
            {description}
            <Socials socialNetworks={socialNetworks} url={url} />
          </CompanyDetails>
        </BorrowerCard>
        <SideInfo>
          <SideTitle>Overview</SideTitle>
          <KPIList kpis={kpis} />
          <BorrowerInfo address={address} date={foundationDate} extraResources={extraResources} />
        </SideInfo>
      </Container>
    </BorrowerPage>
  );
};

export default withRouter(BorrowerProfile);
