/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useCookie from 'react-use-cookie';
import { NeedHelp } from '@raisehq/components';
import { LoanPageContainer, SignUpWrapper, Loading, LoadingWrapper } from './styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { findOne, requestPage } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';
import SignUp from '../SignUp';
import PageSection from '../PageSection';
import LoanInfoSection from './LoanInfoSection';
import BorrowerAboutSection from './BorrowerAboutSection';
import useRouter from '../../hooks/useRouter';
import useGetCoin from '../../hooks/useGetCoin';
import WarningModal from '../WarningModal';
import { isAddress } from '../../utils';
import datadogLogs from '../../helpers/datadogLogs';

const LoanPage = ({
  match: {
    params: { address }
  }
}) => {
  let loanAddress;
  // @ts-ignore
  if (window.Cypress) {
    // @ts-ignore
    loanAddress = window.InvestLoanAddress;
  } else if (address && isAddress(address)) {
    loanAddress = address;
  } else {
    loanAddress = null;
  }

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
  const { history } = useRouter();

  const [warningCK, setWarningCK] = useCookie('warning', '');
  const [activeWarning, setWarning]: any = useState();
  const [open, setOpen] = useState(false);

  const [loan, setLoan] = useState(null);
  const [butterSection, setButterSection] = useState(null);
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
  const [sections, setSections] = useState([]);
  const [coinInfo, setCoinInfo]: any = useState(null);

  const connected = hasProvider && unlocked && accountMatches && networkMatches;
  const userActivated = connected && kycStatus === 3;

  const coin = useGetCoin(loan);
  useEffect(() => {
    if (coin.text !== '' && !coinInfo) {
      setCoinInfo(coin);
    }
  }, [coin, coinInfo]);

  useAsyncEffect(async () => {
    const page = await requestPage('page_with_sections', 'loan-of-the-month');
    const pageSections = page.pageSection.map((pageSection) => {
      const newSection = { ...pageSection.section_reference, ...pageSection };
      delete newSection.section_reference;
      return newSection;
    });
    datadogLogs.logger.info('Button clicked', { name: 'getStarted', id: 1 });
    setButterSection(pageSections[0]);
    window.scrollTo(0, 0);
  }, []);

  useAsyncEffect(async () => {
    try {
      if (!warningCK || warningCK === '') {
        const warning = await findOne('warnings', { 'fields.active': true });
        setOpen(true);
        setWarning(warning);
      }
      window.scrollTo(0, 0);
    } catch (error) {
      // Reminder: Missing companies in Kovan testnet network shows 404 errors
      // console.error('[DASBOARD.LENDER] ', error);
    }
  }, []);

  useAsyncEffect(async () => {
    try {
      if (loanAddress) {
        const currentLoan = await getLoanByAddress(loanAddress, network);
        setLoan(currentLoan);
        const borrowerAddress = currentLoan.originator;
        const borrowerInformation: any = await findOne('companies', {
          'fields.ethereum_address': borrowerAddress
        });
        const borrowerPage = await requestPage('borrower_profile', borrowerInformation.slug);
        setBorrowerInfo(borrowerPage);
      } else {
        const loanOfTheMonthInfo = await findOne('loan_of_the_month', {
          'fields.net': network,
          'fields.loan_of_the_month': true
        });

        const borrowerPage = await requestPage(
          'borrower_profile',
          loanOfTheMonthInfo.borrowerInfo.slug
        );
        const currentLoan = await getLoanByAddress(loanOfTheMonthInfo.loanAddress, network);
        loanAddress = currentLoan;
        setLoan(currentLoan);
        setBorrowerInfo(borrowerPage);
      }
    } catch (error) {
      console.error('Error querying loan info ', error);
    }
    window.scrollTo(0, 0);
  }, [loanAddress]);

  const onClickHelp = () => {
    history.push('/investing');
  };

  useEffect(() => {
    const sectionArray: any = [];
    if (coinInfo) {
      sectionArray.push({
        component: (
          <LoanInfoSection
            borrowerInfo={borrowerInfo}
            loan={loan}
            userActivated={userActivated}
            isLogged={isLogged}
            coinInfo={coinInfo}
          />
        ),
        section_title: 'loanInfo'
      });
    }

    if (!isLogged) {
      sectionArray.push({
        component: (
          <SignUpWrapper>
            <SignUp id="loanofmonth_signup" />
          </SignUpWrapper>
        ),
        section_title: 'signup'
      });
    }

    if (borrowerInfo?.companyDetails?.companyName !== '') {
      sectionArray.push({
        component: (
          <div id="borrowerinfo">
            <BorrowerAboutSection
              borrowerInfo={borrowerInfo}
              isLogged={isLogged}
              userActivated={userActivated}
            />
          </div>
        ),
        section_title: 'borrowerInfo'
      });
    }

    if (butterSection) {
      sectionArray.push(butterSection);
    }

    sectionArray.push({
      component: <NeedHelp onClickHelp={onClickHelp} />,
      section_title: 'needhelp'
    });

    // put ordering number for waves functionality
    const sectionsWithOrder = sectionArray.map((section, index) => {
      const newSection = { ...section, section_order: index };
      return newSection;
    });

    setSections(sectionsWithOrder);
  }, [coinInfo, loan, borrowerInfo, butterSection]);

  const closeModal = () => {
    setOpen(false);
  };

  if (
    loan &&
    borrowerInfo.companyDetails &&
    borrowerInfo.companyDetails.companyName !== '' &&
    butterSection
  ) {
    return (
      <LoanPageContainer>
        {sections.map((section: any, index) => (
          <PageSection
            key={`${index}-section`}
            section={section}
            sectionIndex={index}
            length={sections.length}
          />
        ))}
        {isLogged && activeWarning ? (
          <WarningModal
            warning={activeWarning}
            open={open}
            closeModal={closeModal}
            setCookie={setWarningCK}
          />
        ) : null}
      </LoanPageContainer>
    );
  }
  return (
    <LoadingWrapper>
      {/* <Dimmering active inverted> */}
      <Loading>Loading</Loading>
      {/* </Dimmering> */}
    </LoadingWrapper>
  );
};

export default withRouter(LoanPage);
