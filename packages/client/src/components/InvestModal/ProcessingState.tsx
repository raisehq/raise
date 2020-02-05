import React, { useContext, useState, Fragment } from 'react';
import { toWei } from 'web3-utils';
import { List, Grid } from 'semantic-ui-react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import useWallet from '../../hooks/useWallet';
import useWeb3 from '../../hooks/useWeb3';

import ERC20 from '../../commons/erc20';
import { MAX_VALUE } from '../../commons/constants';
import { ProcessingStateProps } from './types';
import {
  CardCenteredText,
  CardTitle,
  CardSubtitle,
  LabelPaddingLoader,
  IconSuccess,
  MicroLoader,
  LabelPadding,
  SegmentPadded,
  ListItemPadding,
  Explanation,
  Action,
  IconSuccess as IconError,
  RetryButton,
  BlankSpace,
  ModalFlexWrapper
} from './InvestModal.styles';
import AppContext from '../AppContext';

const ProcessingState: React.SFC<ProcessingStateProps> = ({ loan, investment, ui, setStage }) => {
  const {
    web3Status: { walletAccount },
    followTx
  }: any = useContext(AppContext);

  const { web3 } = useWeb3();
  const metamask = useWallet();

  const [contracts, setContracts] = useState();
  const [approved, setAproved] = useState(false);
  const [errors, setError] = useState();

  useAsyncEffect(async () => {
    if (metamask) {
      const DAIProxy = await metamask.addContract('DAIProxy');
      const DAI = await metamask.addContract('DAI');
      setContracts({
        DAIProxy,
        DAI
      });
    }
  }, [metamask]);

  useAsyncEffect(async () => {
    if (contracts) {
      const { BN } = web3.utils;
      const { DAIProxy, DAI } = contracts;
      const valueBN = new BN(toWei(investment.toString()));
      const DAIContract = new web3.eth.Contract(ERC20, DAI.options.address);

      const amountApproved = await DAIContract.methods
        .allowance(walletAccount, DAIProxy.options.address)
        .call({ from: walletAccount });
      if (valueBN.gt(new BN(amountApproved))) {
        try {
          await DAIContract.methods
            .approve(DAIProxy.options.address, MAX_VALUE)
            .send({ from: walletAccount });
          setAproved(true);
        } catch (error) {
          console.error(
            '[DAIProxy ERROR ]',
            'approve :',
            DAIProxy.options.address,
            ' stacktrace: ',
            error
          );
          setError({ approvalError: error });
        }
      } else {
        setAproved(true);
      }
    }
  }, [contracts]);

  useAsyncEffect(async () => {
    if (approved) {
      const { DAIProxy } = contracts;
      try {
        await followTx.watchTx(
          DAIProxy.methods
            .fund(loan.id, toWei(investment.toString()))
            .send({ from: walletAccount }),
          'investment'
        );
        setStage(ui.Success);
      } catch (error) {
        console.error('[DAIProxy ERROR]', 'address:', loan.id, ' stacktrace: ', error);
        setError({ transactionError: error });
      }
    }
  }, [approved]);

  const onRetry = () => {
    setStage(ui.Confirm);
  };

  const printRetry = () => {
    return <RetryButton onClick={onRetry}>RETRY</RetryButton>;
  };

  const stepNumber = (number, action) => {
    let icon = (
      <LabelPadding circular key="black-02">
        {number}
      </LabelPadding>
    );
    if (action === 'aproval') {
      if (approved) {
        icon = (
          <LabelPaddingLoader circular color={'green'}>
            <IconSuccess name="check" />
          </LabelPaddingLoader>
        );
      } else if (errors && errors.aprovalError) {
        icon = (
          <LabelPaddingLoader circular color="red">
            <IconError name="close" />
          </LabelPaddingLoader>
        );
      } else {
        icon = (
          <LabelPaddingLoader circular key="black-01">
            <MicroLoader active inverted />
          </LabelPaddingLoader>
        );
      }
    }

    if (action === 'fund') {
      if (approved && !errors) {
        icon = (
          <LabelPaddingLoader circular key="black-01">
            <MicroLoader active inverted />
          </LabelPaddingLoader>
        );
      } else if (errors && errors.transactionError) {
        icon = (
          <LabelPaddingLoader circular color="red">
            <IconError name="close" />
          </LabelPaddingLoader>
        );
      }
    }

    return icon;
  };

  return (
    <ModalFlexWrapper>
      <Fragment>
        <CardCenteredText>
          <CardTitle>Processing</CardTitle>
          <CardSubtitle>Check your MetaMask wallet to proceed</CardSubtitle>
        </CardCenteredText>
        <CardCenteredText>
          <SegmentPadded textAlign="left">
            <List>
              <ListItemPadding>
                <Grid columns={2}>
                  <Grid.Column width={2}>{stepNumber(1, 'aproval')}</Grid.Column>
                  <Grid.Column width={14}>
                    <Action>Allow Raise to interact with your DAI</Action>
                    <Explanation>
                      Once you give us allowance, you will be able to make investments in DAI
                    </Explanation>
                  </Grid.Column>
                </Grid>
              </ListItemPadding>
              <ListItemPadding>
                <Grid columns={2}>
                  <Grid.Column width={2}>{stepNumber(2, 'fund')}</Grid.Column>
                  <Grid.Column width={14}>
                    <Action>Confirm the transaction</Action>
                    <Explanation>
                      {`${investment} DAI will be transferred from your wallet to the loan`}
                    </Explanation>
                  </Grid.Column>
                </Grid>
              </ListItemPadding>
            </List>
          </SegmentPadded>
        </CardCenteredText>
      </Fragment>
      {errors && (errors.approvalError !== null || errors.transactionError !== null) ? (
        printRetry()
      ) : (
        <BlankSpace />
      )}
    </ModalFlexWrapper>
  );
};

export default ProcessingState;
