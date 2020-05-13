/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  NeedHelp
  // useCompaniesScrapper
} from '@raisehq/components';
import { LoanPageContainer, SignUpWrapper, Loading } from './styles';
import { useAppContext } from '../../contexts/AppContext';
import { useRootContext } from '../../contexts/RootContext';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { findOne, findOneCollection, requestPage } from '../../helpers/butter';
import { getLoanByAddress } from '../../services/blockchain';
import SignUp from '../SignUp';
import PageSection from '../PageSection';
import LoanInfoSection from './LoanInfoSection';
import BorrowerAboutSection from './BorrowerAboutSection';
import useRouter from '../../hooks/useRouter';
// import APRComparatorSection from './APRComparatorSection';

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
  // const [companyList, setCompanyList] = useState();

  // const companies = useCompaniesScrapper();

  const connected = hasProvider && unlocked && accountMatches && networkMatches;
  const userActivated = connected && kycStatus === 3;

  // useEffect(() => {
  //   if (companies) {
  //     console.log('companies::::::::::::::::::::: ', companies);
  //     setCompanyList(companies);
  //   }
  // }, [companies]);

  useAsyncEffect(async () => {
    const section: any = await findOneCollection('sections', { 'fields.id': 'skin_in_the_game' });
    setButterSection(section[0]);
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

  useEffect(() => {
    const sectionArray: any = [];
    sectionArray.push({
      component: (
        <LoanInfoSection
          borrowerInfo={borrowerInfo}
          loan={loan}
          userActivated={userActivated}
          isLogged={isLogged}
        />
      ),
      section_title: 'loanInfo'
    });

    if (!isLogged) {
      sectionArray.push({
        component: (
          <SignUpWrapper>
            <SignUp id="Loanofmonth_signup" />
          </SignUpWrapper>
        ),
        section_title: 'signup'
      });
    }

    // if (companyList.length > 1) {
    //   sectionArray.push({
    //     component: (
    //       <APRComparatorSection
    //         companies={companyList}
    //         isLogged={isLogged}
    //         userActivated={userActivated}
    //         history={history}
    //       />
    //     ),
    //     section_title: 'apr_comparision'
    //   });
    // }

    if (borrowerInfo.companyDetails.companyName !== '') {
      sectionArray.push({
        component: (
          <BorrowerAboutSection
            borrowerInfo={borrowerInfo}
            history={history}
            isLogged={isLogged}
            userActivated={userActivated}
          />
        ),
        section_title: 'borrowerInfo'
      });
    }

    if (butterSection) {
      sectionArray.push(butterSection);
    }

    sectionArray.push({
      component: <NeedHelp />,
      section_title: 'needhelp'
    });

    // put ordering number for waves functionality
    const sectionsWithOrder = sectionArray.map((section, index) => {
      const newSection = { ...section, section_order: index };
      return newSection;
    });
    console.log('ordered section:: ', sectionsWithOrder);
    setSections(sectionsWithOrder);
  }, [loan, borrowerInfo, butterSection]);

  // console.log('-- ||| ----- ', companyList);

  if (loan && borrowerInfo && butterSection) {
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
      </LoanPageContainer>
    );
  }
  return <Loading inverted>Loading</Loading>;
};

export default LoanPage;
