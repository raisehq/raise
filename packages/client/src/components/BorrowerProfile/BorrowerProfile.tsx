import React, { useState } from 'react';
import { Header, Segment, Loader, Dimmer, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { requestPage } from '../../helpers/butter';
import { cryptoAddressByAccount } from '../../services/user';
import { BorrowerProfile as BorrowerProfileType } from '../../commons/BorrowerProfile';

import {
  BorrowerCard,
  SideInfo,
  Container,
  CompanyName,
  HeaderBox
} from './BorrowerProfile.styles';
import { Resources } from './Resource';
import { KPIList } from './KPI';
import Socials from './Socials';
import BorrowerLoans from './BorrowerLoans';

const defaultBorrower = {
  companyName: 'Loading...',
  description: '',
  logo: '',
  socialNetworks: [],
  extraResources: [],
  kpis: [],
  url: '',
  urlText: '',
  updated: '',
  address: '',
  userId: '',
  account: '',
  foundationDate: ''
};

const BorrowerProfile = () => {
  const [borrower, setPayload]: [BorrowerProfileType, any] = useState(defaultBorrower);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    companyName,
    description,
    logo,
    url,
    urlText,
    updated,
    address,
    extraResources,
    socialNetworks,
    kpis,
    foundationDate,
    account
  } = borrower;
  const lastUpdated = new Date(updated).toLocaleDateString('en-GB');
  const createdDate = new Date(foundationDate).toLocaleDateString('en-GB');
  useAsyncEffect(async () => {
    try {
      const response = await requestPage('borrower_profile', 'speck-sl');
      const { address: userAccount } = await cryptoAddressByAccount(response.userId, 2);
      setPayload({ ...response, account: userAccount });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNotFound(true);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && (
        <Segment>
          <Dimmer active={loading} inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      )}

      {notFound && (
        <Segment>
          <Header>Nothing here to see</Header>
          <p>Click in the button below to go home.</p>
          <Button primary as={Link} to="/">
            Return to home
          </Button>
        </Segment>
      )}
      {!notFound && (
        <Container>
          <BorrowerCard>
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
          </BorrowerCard>
          <SideInfo>
            <p>{address}</p>
            <p>Founded on {createdDate}</p>
            <Resources extraResources={extraResources} />
          </SideInfo>
          <BorrowerLoans account={account} />
        </Container>
      )}
    </>
  );
};

export default BorrowerProfile;
