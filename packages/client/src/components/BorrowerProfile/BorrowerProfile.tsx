import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import useAsyncEffect from '../../hooks/useAsyncEffect';
import { requestPage } from '../../helpers/butter';
import { BorrowerProfile as BorrowerProfileType } from '../../interfaces/BorrowerProfile';
import {
  BorrowerCard,
  SideInfo,
  Container,
  CompanyName,
  HeaderBox,
  HeaderImage,  
  CompanyDetails,
  BorrowerPage,
  LoanContainer,
  SideTitle
} from './BorrowerProfile.styles';
import { Resources } from './Resource';
import { KPIList } from './KPI';
import Socials from './Socials';
import BorrowerLoans from './BorrowerLoans';
import Borrower404 from './Borrower404';
import BorrowerLoading from './BorrowerLoading';
import {BorrowerInfo} from './BorrowerInfo';

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
      // urlText,
      updated,
      address,
      foundationDate,
      ethereumAddress,
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
      setPayload(response);
      setLoading(false);
    } catch (error) {
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
    <BorrowerPage>
      <Container>
        <BorrowerCard>
          <HeaderImage>
            <Image src={background} />
          </HeaderImage>
          <CompanyDetails>
            <HeaderBox>
              <div>
                <Image size="small" src={logo} />
              </div>
            </HeaderBox>
            <CompanyName>{companyName}</CompanyName>
            <p>Last updated: {lastUpdated}</p>
            <b>About</b>
            {description}
            <Socials socialNetworks={socialNetworks} url={url}/>
          </CompanyDetails>
        </BorrowerCard>
        <SideInfo>
          <SideTitle>Overview</SideTitle>
          <KPIList kpis={kpis}></KPIList>
          <BorrowerInfo address={address} date={createdDate} />
          <Resources extraResources={extraResources} />
        </SideInfo>
      </Container>
      <LoanContainer>
        <BorrowerLoans account={ethereumAddress} />
      </LoanContainer>
    </BorrowerPage>
  );
};

export default withRouter(BorrowerProfile);
