import React, { useState } from 'react';
import Invest from '../Invest';
import {
  LoanPageContainer,
  LoanPageInfoSection,
  LoanInformationContainer,
  LoanInvestContainer,
  LoanSubResumeWrapper,
  LoanResumeWrapper,
  BorrowerResume
} from './styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { findOne, requestPage } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';
import AboutBorrower from '@raisehq/components';

const LoanPage = () => {
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

  useAsyncEffect(async () => {
    try {
      const loanAddress = process.env.REACT_APP_LOAN_OF_THE_MONTH;
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
  }, []);
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
      <AboutBorrower borrowerInfo={borrowerInfo} />
    </LoanPageContainer>
  );
};

export default LoanPage;
