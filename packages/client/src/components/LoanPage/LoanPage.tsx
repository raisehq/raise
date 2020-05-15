/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import useCookie from 'react-use-cookie';
import { NeedHelp } from '@raisehq/components';
import { LoanPageContainer, SignUpWrapper, Loading } from './styles';
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

    setButterSection(pageSections[0]);
  }, []);

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

    if (borrowerInfo.companyDetails.companyName !== '') {
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

  if (loan && borrowerInfo.companyDetails.companyName !== '' && butterSection) {
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
        {activeWarning ? (
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
  return <Loading inverted>Loading</Loading>;
};

export default LoanPage;
