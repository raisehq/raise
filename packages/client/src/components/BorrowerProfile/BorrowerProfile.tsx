import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import useAsyncEffect from '../../hooks/useAsyncEffect';
import { requestPage } from '../../helpers/butter';
import { cryptoAddressByAccount } from '../../services/user';
import { BorrowerProfile as BorrowerProfileType } from '../../commons/BorrowerProfile';
import {
  BorrowerCard,
  SideInfo,
  Container,
  CompanyName,
  HeaderBox,
  HeaderImage,
  Icon,
  AddressInfo,
  CompanyDetails
} from './BorrowerProfile.styles';
import { Resources } from './Resource';
import { KPIList } from './KPI';
import Socials from './Socials';
import BorrowerLoans from './BorrowerLoans';
import Borrower404 from './Borrower404';
import BorrowerLoading from './BorrowerLoading';

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
    account: '',
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
      urlText,
      updated,
      address,
      foundationDate,
      account,
      background
    },
    extraResources,
    socialNetworks,
    kpis
  } = borrower;
  const lastUpdated = new Date(updated).toLocaleDateString('en-GB');
  const createdDate = new Date(foundationDate).toLocaleDateString('en-GB');

  useAsyncEffect(async () => {
    try {
      const response = await requestPage('borrower_profile', slug);
      console.log(response);
      const { address: userAccount } = await cryptoAddressByAccount(
        response.companyDetails.userId,
        2
      );
      setPayload({ ...response, account: userAccount });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setNotFound(true);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <BorrowerLoading />;
  }
  if (notFound) {
    return <Borrower404 />;
  }
  return (
    <Container>
      <BorrowerCard>
        <HeaderImage>
          <Image size="massive" src={background} />
        </HeaderImage>
        <CompanyDetails>
          <HeaderBox>
            <div>
              <Image size="small" src={logo} />
              <a href={url} rel="noopener noreferrer" target="_blank">
                {urlText}
              </a>
            </div>
            <KPIList kpis={kpis} />
          </HeaderBox>
          <CompanyName>{companyName}</CompanyName>
          <p>Last updated: {lastUpdated}</p>
          <b>About</b>
          {description}
          <Socials socialNetworks={socialNetworks} />
        </CompanyDetails>
      </BorrowerCard>
      <SideInfo>
        <p className="borrowerInfo">
          <Icon className="map marker alternate icon"></Icon>
          <AddressInfo>{address}</AddressInfo>
        </p>
        <p>
          <Icon className="calendar alternate icon"></Icon>
          Founded on {createdDate}
        </p>
        <Resources extraResources={extraResources} />
      </SideInfo>
      <BorrowerLoans account={account} />
    </Container>
  );
};

export default withRouter(BorrowerProfile);
