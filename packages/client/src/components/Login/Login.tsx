import React, { useState, useContext, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import daggy from 'daggy';
import { Message } from 'semantic-ui-react';
import { InitialStateType, Index, Mode } from './Login.types';
import {
  FullWrapper,
  Controls,
  Box,
  HeroButton,
  Promo,
  Actions,
  HeroImage,
  HeroHeader,
  Disclaimer,
  Overlay,
  SubDisclaimer,
  HeroMessageHolder
} from './Login.styles';
import { RootContext } from '../../context';
import validationFields from './Login.validation';
import SignIn from './Login.SignIn';
import SignUp from './Login.SignUp';
import Recover from './Login.Recover';
import NewPassword from './Login.NewPassword';

const UI = daggy.taggedSum('UI', {
  SignIn: [],
  SignUp: [],
  RecoverPassword: [],
  NewPassword: [],
  Redirection: []
});

const initialState: InitialStateType = {
  mode: UI.SignIn,
  form: {},
  errorFields: {},
  pristine: true,
  terms: false
};

const Login = props => {
  const {
    store: {
      auth: {
        login: { logged, signup, error, reset, stack },
        newPassword,
        newPasswordError
      }
    },
    actions: {
      auth: { onSignin, onSignup, onRecovery, onChangePassword }
    }
  }: any = useContext(RootContext);
  const [state, setState] = useState(initialState);
  const { mode, form, errorFields, pristine, terms } = state;

  useEffect(() => {
    if (props.match.path === '/password/reset/:token') {
      setState({
        ...state,
        mode: UI.NewPassword
      });
    }

    if (logged) {
      setState({
        ...state,
        mode: UI.Redirection
      });
    }
  }, [logged]);

  useEffect(() => {
    if (newPassword && !newPasswordError) {
      setState({ ...state, mode: UI.SignIn });
    }
  }, [newPassword, newPasswordError]);

  const onModeClick = (newMode: Mode) => () =>
    setState({
      ...state,
      mode: UI[newMode],
      pristine: true,
      form: initialState.form
    });

  const onError = error =>
    setState({ ...state, errorFields: error, pristine: false });

  const onSend = action => () => {
    validationFields(mode, form, terms).fold(
      error => onError(error),
      () => action(form)
    );
  };

  const onToggleTerms = () => setState({ ...state, terms: !state.terms });

  const onChange = (input: Index) => (e: any, obj: any) => {
    const value: string = obj && obj.value ? obj.value : e.target.value;

    setState({
      mode,
      form: { ...form, [input]: value },
      errorFields,
      pristine,
      terms
    });
  };

  const getView = () =>
    mode.cata({
      SignIn: () => (
        <SignIn
          onChange={onChange}
          onModeClick={onModeClick}
          onSend={onSend(onSignin)}
          requestError={stack}
          pristine={pristine}
          errorFields={errorFields}
        />
      ),
      SignUp: () => (
        <SignUp
          onChange={onChange}
          onModeClick={onModeClick}
          onSend={onSend(onSignup)}
          pristine={pristine}
          requestError={error}
          errorFields={errorFields}
          onToggleTerms={onToggleTerms}
        />
      ),
      RecoverPassword: () => (
        <Recover
          onChange={onChange}
          onSend={onSend(onRecovery)}
          pristine={pristine}
          requestError={error}
          errorFields={errorFields}
        />
      ),
      NewPassword: () => (
        <NewPassword
          newPassword={newPassword}
          newPasswordError={newPasswordError}
          onChange={onChange}
          onSend={onSend(onChangePassword(props.match.params.token))}
          pristine={pristine}
          requestError={error}
          errorFields={errorFields}
        />
      ),
      Redirection: () => <Redirect to="/" />
    });

  return (
    <FullWrapper>
      <Promo>
        <Overlay>
          <Disclaimer>The future of P2P lending</Disclaimer>
          <SubDisclaimer>Lore Impsum</SubDisclaimer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt, nisl ut blandit finibus, diam tortor fermentum quam, eget
            lacinia leo elit et turpis. Praesent in dui sed mauris efficitur
            maximus. Duis ac tempus enim.
          </p>
        </Overlay>
      </Promo>
      <Actions>
        <HeroImage src="https://static.herodev.es/images/hero.jpeg" />
        <HeroHeader as="h1">herotoken</HeroHeader>
        <HeroMessageHolder>
          {signup && (
            <Message success>
              Your account has been created. Check your inbox to validate your
              email address.
            </Message>
          )}
          {reset && <Message success>Check your email</Message>}
          {newPassword && !newPasswordError && (
            <Message success>Password updated succesfuly</Message>
          )}
        </HeroMessageHolder>
        <Box>
          <Controls>
            <HeroButton
              onClick={onModeClick('SignIn')}
              active={mode.is(UI.SignIn)}
            >
              Sign in
            </HeroButton>
            <HeroButton
              onClick={onModeClick('SignUp')}
              active={mode.is(UI.SignUp)}
            >
              Sign up
            </HeroButton>
          </Controls>
          {getView()}
        </Box>
      </Actions>
    </FullWrapper>
  );
};

export default withRouter(Login);
