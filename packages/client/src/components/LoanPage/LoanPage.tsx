import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Invest from '../Invest';
import {
  LoanPageContainer,
  LoanPageInfoSection,
  LoanInformationContainer,
  LoanInvestContainer
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
  console.log('................. netwirj................ ', network);
  const [loan, setLoan] = useState(null);
  const [borrowerInfo, setBorrowerInfo] = useState({});

  useAsyncEffect(async () => {
    try {
      const currentLoan = await getLoanByAddress(address, network);
      setLoan(currentLoan);
      const borrowerAddress = currentLoan.originator;
      const borrowerInformation = await findOne('companies', {
        'fields.ethereum_address': borrowerAddress
      });
      setBorrowerInfo(borrowerInformation);
    } catch (error) {
      console.error('Error querying loan info ', error);
    }
  }, []);

  const connected = hasProvider && unlocked && accountMatches && networkMatches;
  const userActivated = connected && kycStatus === 3;

  return (
    <LoanPageContainer>
      <LoanPageInfoSection>
        <LoanInformationContainer>
          {Object.keys(borrowerInfo).length > 0 && <>hola</>}
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
