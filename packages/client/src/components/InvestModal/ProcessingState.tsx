import React, { useContext, useState } from 'react';
import { toWei } from 'web3-utils';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import useMetamask from '../../hooks/useMetaMask';
import { getWeb3 } from '../../utils';
import ERC20 from '../../commons/erc20';
import { MAX_VALUE } from '../../commons/constants';
import { ProcessingStateProps } from './types';
import {
  Header,
  ConfirmButton
} from './InvestModal.styles';
import { AppContext } from '../App';


const ProcessingState: React.SFC<ProcessingStateProps> = ({ loan, investment, ui, setStage }) => {
  const {
    web3Status: { account }
  }: any = useContext(AppContext);
  const metamask = useMetamask();
  const web3 = getWeb3();

  const [contracts, setContracts] = useState();
  const [approved, setAproved] = useState(false);
  const [errors, setError] = useState({
    approvalError: null,
    transactionError: null
  })


  useAsyncEffect(async () => {
    const Proxy = await metamask.addContract('DAIProxy');
    const DAI = await metamask.addContract('DAI');
    setContracts({
      Proxy,
      DAI
    })
  }, []);

  useAsyncEffect(async () => {
    const { BN } = web3.utils;
    const { DAIProxy, DAI } = contracts;
    const valueBN = new BN(toWei(investment.toString()));
    const DAIContract = new web3.eth.Contract(ERC20, DAI._address);

    const amountApproved = await DAIContract.methods.allowance(
      account,
      DAIProxy.options.address,
    ).call({ from: account });

    if (valueBN.gt(new BN(amountApproved))) {
      try {
        await DAIContract.methods
          .approve(DAIProxy.options.address, MAX_VALUE)
          .send({ from: account });
      } catch (error) {
        setError({ approvalError: error });
      }
    } else {
      setAproved(true);
    }
  }, [contracts]);

  useAsyncEffect(async () => {
    if (approved) {
      const { DAIProxy } = contracts;
      try {
        await DAIProxy.methods
          .fund(loan.loanAddress, toWei(investment.toString()))
          .send({ from: account });
      } catch (error) {
        setError({ transactionError: error });
      }
    }
  }, [approved]);

  const onRetry = () => {
    setStage(ui.Confrim);
  }

  const printRetry = () => {
    return (
      <ConfirmButton onClick={onRetry}>RETRY</ConfirmButton>

    );
  }

  return (
    <>
      <Header>Processing</Header>
      {investment}
      {
        errors.approvalError !== null
        || errors.transactionError !== null
        ? printRetry() : null
      }
    </>
  );
};

export default ProcessingState;
