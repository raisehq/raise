import React, { useState } from 'react';
import {
  AboutBorrower,
  NeedHelp
  // LoanComparatorChart,
  // useCompaniesScrapper
} from '@raisehq/components';
import Invest from '../Invest';
import {
  LoanPageContainer,
  LoanPageInfoSection,
  LoanInformationContainer,
  LoanInvestContainer,
  LoanSubResumeWrapper,
  LoanResumeWrapper,
  BorrowerResume,
  BorrowerInfoContainer,
  BorrowerDescription,
  BorrowerInfoTitle,
  BorrowerAboutContainer,
  SectionContainer
} from './styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { findOne, requestPage } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';
// import SignUp from '../SignUp';

const LoanPage = () => {
  const loanAddress = process.env.REACT_APP_LOAN_OF_THE_MONTH;
  const {
    web3Status: { hasProvider, unlocked, accountMatches, networkMatches }
  }: any = useAppContext();

  const {
    store: {
      user: {
        details: { kyc_status: kycStatus }
      },
      auth: {
        login: { logged: isLogged }
      },
      config: { network }
    }
  }: any = useRootContext();
  const [loan, setLoan] = useState(null);
  const [borrowerInfo, setBorrowerInfo] = useState({
    companyDetails: {
      companyName: '',
      description: '',
      shortDescription: '',
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
  });
  // const companies = useCompaniesScrapper();

  useAsyncEffect(async () => {
    try {
      const currentLoan = await getLoanByAddress(loanAddress, network);
      setLoan(currentLoan);
      const borrowerAddress = currentLoan.originator;
      const borrowerInformation: any = await findOne('companies', {
        'fields.ethereum_address': borrowerAddress
      });
      const borrowerPage = await requestPage('borrower_profile', borrowerInformation.slug);
      setBorrowerInfo(borrowerPage);
    } catch (error) {
      console.error('Error querying loan info ', error);
    }
  }, [loanAddress]);
  console.log('borrower info:: ', borrowerInfo);
  const connected = hasProvider && unlocked && accountMatches && networkMatches;
  const userActivated = connected && kycStatus === 3;

  return (
    <LoanPageContainer>
      <LoanPageInfoSection>
        <LoanInformationContainer>
          {Object.keys(borrowerInfo).length > 0 && (
            <>
              <LoanResumeWrapper />
              <LoanSubResumeWrapper />
              <BorrowerResume>{borrowerInfo.companyDetails.shortDescription}</BorrowerResume>
            </>
          )}
        </LoanInformationContainer>
        <LoanInvestContainer>
          {loan && (
            <Invest
              loan={loan}
              userActivated={userActivated}
              fullInfo={false}
              isLogged={isLogged}
            />
          )}
        </LoanInvestContainer>
      </LoanPageInfoSection>
      {/* {!isLogged && (
        <SectionContainer>
          <SignUp id="Loanofmonth_signup" />
        </SectionContainer>
      )} */}
      {/* {companies.length > 1 && (
        <SectionContainer>
          <LoanComparatorChart companies={companies} />
        </SectionContainer>
      )} */}
      {borrowerInfo.companyDetails.companyName !== '' && (
        <BorrowerAboutContainer>
          <BorrowerInfoTitle>About {borrowerInfo.companyDetails.companyName}</BorrowerInfoTitle>
          <BorrowerInfoContainer>
            <BorrowerDescription>{borrowerInfo.companyDetails.description}</BorrowerDescription>
            <AboutBorrower borrowerInfo={borrowerInfo} />
          </BorrowerInfoContainer>
        </BorrowerAboutContainer>
      )}
      <SectionContainer>
        <NeedHelp />
      </SectionContainer>
    </LoanPageContainer>
  );
};

export default LoanPage;
