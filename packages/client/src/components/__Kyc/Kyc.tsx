import React, { useState, useContext, useEffect, createContext } from 'react';
import { Header } from 'semantic-ui-react';
import { Section, Wrapper } from 'hero-ui';
import { Redirect } from 'react-router-dom';
import daggy from 'daggy';
import UploadId from './Kyc.UploadId';
import Information from './Kyc.Info';
import Sending from './Kyc.Sending';
import ErrorSending from './Kyc.Error';
import { AppContext } from '../App';
import { KycStatus } from '../../commons/kycStatus';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UI = daggy.taggedSum('UI', {
  information: [],
  uploadId: [],
  sending: [],
  error: []
});

const nextView = (view: any) => {
  return view.cata({
    information: () => UI.uploadId,
    uploadId: () => UI.sending,
    sending: () => UI.sending,
    error: () => UI.error
  });
};

const getViewContent = (mode: any, onSubmit: any, reSubmit: any) => {
  return mode.cata({
    information: () => <Information onSubmit={onSubmit} />,
    uploadId: () => <UploadId onSubmit={onSubmit} />,
    sending: () => <Sending />,
    error: () => <ErrorSending reSubmit={reSubmit} />
  });
};

const Kyc = () => {
  const {
    store: {
      kyc,
      kyc: {
        error,
        previous: { statusId }
      }
    },
    actions: {
      kyc: { sendRegistration, checkStatusLastKyc },
      auth: { getUserAuth }
    }
  }: any = useContext(AppContext);

  const [mode, setMode] = useState(UI.information);
  const [toastId, setToastId]: any = useState(0);

  const [state, setState] = useState({
    information: null,
    verification: null
  });

  const handleToast = message => {
    if (!toast.isActive(toastId) && toastId === 0) {
      setToastId(
        toast(message, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: 13
        })
      );
    }
  };

  const getViewMessage = (statusId: number) => {
    return statusId === KycStatus.Error
      ? ' KYC Error: We found some issues in your application. Please try again. '
      : ' KYC Uncompleted: We need more information.';
  };

  useEffect(() => {
    checkStatusLastKyc();
  }, []);

  useEffect(() => {
    (statusId === KycStatus.Error || statusId === KycStatus.Uncompleted) &&
      handleToast(getViewMessage(statusId));
  }, [kyc.previous.statusId]);

  useEffect(() => {
    if (error && UI.sending === mode) {
      setMode(UI.error);
    }
  }, [error, mode]);

  const onSubmit = (type: string) => async (data: any) => {
    const newState: any = { ...state, [type]: data };
    const nextMode = nextView(mode);

    setState(newState);
    setMode(nextMode);

    if (UI.sending === nextMode) {
      await sendRegistration(newState);
      await getUserAuth();
    }
  };
  const reSubmit = async () => {
    setMode(UI.sending);
    await sendRegistration(state);
    await getUserAuth();
  };
  if (kyc.sended && state.information && state.verification) {
    return <Redirect to="/kyc/validation" />;
  }

  return (
    <Context.Provider value={{ UI, mode }}>
      <Wrapper>
        <ToastContainer autoClose={false} />
        <Header as="h1">Complete registration</Header>
        <Section>{getViewContent(mode, onSubmit, reSubmit)}</Section>
      </Wrapper>
    </Context.Provider>
  );
};

export default Kyc;
export const Context = createContext({});
