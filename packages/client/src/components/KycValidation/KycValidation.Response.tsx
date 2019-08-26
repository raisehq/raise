import React, { Fragment, useContext } from 'react';
import { Loader, Icon, Button } from 'semantic-ui-react';
import { Message } from './KycValidation.styles';
import * as Types from '../../store/store.types';
import daggy from 'daggy';
import { KycStatus } from '@raisehq/components/src/commons/kycStatus';
import { AppContext } from '../App';

const UI = daggy.taggedSum('UI', {
  Success: [{}],
  Failure: []
});

const Response = ({ error, statusId }: Types.ResponseKycValidationProps) => {
  const { history }: any = useContext(AppContext);

  const handleSuccessRedirect = () => {
    return history.push('/');
  };
  const handleErrorRedirect = () => {
    return history.push('/kyc');
  };

  const getSatus = (status: Types.KycValidationStatusId) => {
    switch (status) {
      case KycStatus.Error:
        return (
          <Fragment>
            <Icon color="red" size="huge" name="warning circle" />
            <Message>Something went wrong. Please try again later.</Message>
            <Button basic onClick={handleErrorRedirect}>
              Retry
            </Button>
          </Fragment>
        );
        break;
      case KycStatus.Completed:
        return (
          <Fragment>
            <Icon color="green" size="huge" name="thumbs up" />
            <Message>Validation completed</Message>
            <Button basic onClick={handleSuccessRedirect}>
              Next
            </Button>
          </Fragment>
        );
        break;
      case KycStatus.Uncompleted:
        return (
          <Fragment>
            <Icon color="red" size="huge" name="warning circle" />
            <Message>Validation could not be completed</Message>
            <Button basic onClick={handleErrorRedirect}>
              Retry
            </Button>
          </Fragment>
        );
        break;
      default:
        return (
          <Fragment>
            <Icon color="grey" size="huge" name="warning circle" />
            <Message>Validation is pending</Message>
            <Loader active inline="centered" />
            <br />
            <br />
            <Button basic onClick={handleSuccessRedirect}>
              Next
            </Button>
          </Fragment>
        );
        break;
    }
  };

  const getView = (ui: any) =>
    ui.cata({
      Success: (status: any) => getSatus(status),
      Failure: () => (
        <Fragment>
          <Icon color="red" size="huge" name="warning circle" />
          <Message>Something went wrong. Please try again later.</Message>
          <Button basic onClick={handleErrorRedirect}>
            OK
          </Button>
        </Fragment>
      )
    });

  if (error) return getView(UI.Failure);
  return getView(UI.Success(statusId));
};
export default Response;
