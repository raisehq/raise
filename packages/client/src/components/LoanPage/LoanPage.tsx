import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
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
import { findOne } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';

const LoanPage = ({
  match: {
    params: { address }
  }
}: any) => {
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
    companyName: '',
    description: '',
    shortDescription: '',
    background: '',
    logo: '',
    slug: '',
    route: ''
  });

  useAsyncEffect(async () => {
    try {
      const currentLoan = await getLoanByAddress(address, network);
      setLoan(currentLoan);
      const borrowerAddress = currentLoan.originator;
      const borrowerInformation: any = await findOne('companies', {
        'fields.ethereum_address': borrowerAddress
      });
      setBorrowerInfo(borrowerInformation);
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
              <BorrowerResume>{borrowerInfo.description}</BorrowerResume>
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
    </LoanPageContainer>
  );
};

export default withRouter(LoanPage);
