import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { ContainerStyled } from './KycValidation.styles';
import { AppContext } from '../App';
import useValidationKyc from '../../hooks/useValidationKyc';
import Response from './KycValidation.Response';
import { KycStatus } from '../../commons/kycStatus';
import AutoConfirm from './KycValidation.AutoConfirm';

const SUCCESSFUL_RESPONSES = [
  KycStatus.Error,
  KycStatus.Completed,
  KycStatus.Uncompleted
];

const KycValidation = (props: any) => {
  const {
    store: {
      auth: { id }
    },
    actions: { auth }
  }: any = useContext(AppContext);

  const { error, statusId, requestId } = useValidationKyc({
    userId: id,
    conditions: SUCCESSFUL_RESPONSES
  });

  useEffect(() => {
    auth.getUserAuth();
  }, [statusId]);

  return (
    <ContainerStyled>
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column>
          <Response error={error} statusId={statusId} />
        </Grid.Column>
      </Grid>
      <div style={{ position: 'absolute', bottom: '50px', left: '50px' }}>
        <AutoConfirm kycId={requestId || undefined} />
      </div>
    </ContainerStyled>
  );
};

export default KycValidation;
