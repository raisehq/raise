import React, { useState, useContext } from 'react';
import get from 'lodash/get';
import { getContractsDefinition } from '../../utils';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import useWeb3 from '../../hooks/useWeb3';
import AppContext from '../AppContext';

const ResumeMock = () => {
  const {
    web3Status: { network, account }
  }: any = useContext(AppContext);
  const [show] = useState(false);
  const [info, setInfo] = useState({ eth: 0, hto: 0, dai: 0, kyc: false, dep: false });
  const [heroContracts, setHeroContracts]: any = useState(null);
  const { web3 } = useWeb3();

  useAsyncEffect(async () => {
    const contractsDef = await getContractsDefinition();
    setHeroContracts(contractsDef);
  }, []);

  useAsyncEffect(async () => {
    if (web3 && network && heroContracts && account) {
      const netId = await web3.eth.net.getId();
      const BalanceETH = await web3.eth.getBalance(account);
      const HeroToken = new web3.eth.Contract(
        get(heroContracts, 'abi.HeroToken'),
        get(heroContracts, `address.${netId}.HeroToken`)
      );

      const BalanceHT = await HeroToken.methods.balanceOf(account).call();

      const DAI = new web3.eth.Contract(
        get(heroContracts, 'abi.DAI'),
        get(heroContracts, `address.${netId}.DAI`)
      );
      const BalanceDAI = await DAI.methods.balanceOf(account).call();

      const Auth = new web3.eth.Contract(
        get(heroContracts, 'abi.Auth'),
        get(heroContracts, `address.${netId}.Auth`)
      );
      const hasDeposit = await Auth.methods.hasDeposited(account).call();
      const hasKyc = await Auth.methods.isKYCConfirmed(account).call();

      console.log(`
            ######################################
                ETH: ${BalanceETH}
                HT : ${BalanceHT}
                DAI: ${BalanceDAI}
                KYC: ${hasKyc}
                DEP: ${hasDeposit}
            ######################################`);
      setInfo({
        eth: BalanceETH,
        hto: BalanceHT,
        dai: BalanceDAI,
        kyc: hasKyc,
        dep: hasDeposit
      });
    }
  }, [web3, network, heroContracts, account]);
  if (!show) return <></>;
  return (
    <>
      <ul>
        <li> ETH {info.eth} </li>
        <li> HTO {info.hto} </li>
        <li> DAI {info.dai} </li>
        <li> KYC {info.kyc.toString()} </li>
        <li> DEP {info.dep.toString()} </li>
      </ul>
    </>
  );
};

export default ResumeMock;
