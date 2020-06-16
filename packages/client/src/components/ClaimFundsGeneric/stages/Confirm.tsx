import React, { useState, useContext } from 'react';
import { Button } from '@raisehq/components';
import { Header, ClaimFundsResume, FlexSpacedLayout, RefundInfo } from '../styles';
import ClaimFundsGenericContext from '../Context';
import Stages from '../stages';
import { ResumeItemBig } from './ResumeItemBig';

const Confirm = ({ contractAction, copies }) => {
  const { setStage }: any = useContext(ClaimFundsGenericContext);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    setLoading(true);

    try {
      await contractAction(() => setStage(Stages.Processing));
    } catch (error) {
      console.error(error);
      setStage(Stages.Error);
    }
  };

  return (
    <>
      <ClaimFundsResume>
        <Header>{copies.confirm.header}</Header>
        <FlexSpacedLayout>
          <ResumeItemBig title={copies.confirm.resume.title} value={copies.confirm.resume.value} />
        </FlexSpacedLayout>
        {loading && <RefundInfo>{copies.confirm.info}</RefundInfo>}
      </ClaimFundsResume>
      <Button
        disabled={loading}
        onClick={onConfirm}
        text={copies.confirm.buttonText}
        size="standard"
        fullWidth
        type="primary"
      />
    </>
  );
};

export default Confirm;
