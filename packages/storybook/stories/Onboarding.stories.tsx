import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Onboarding, Step } from '@raisehq/onboarding';

const onClose = () => console.log('close modal');

storiesOf('Onboarding', module)
  .add('Default - Close Button False', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton={false}
        onClose={onClose}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('Start', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.Start}
        onClose={onClose}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignUpWithEmail', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.SignUpWithEmail}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignUpWithBloom', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.SignUpWithBloom}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignInWithBloom', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.SignInWithBloom}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignIn', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.SignIn}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignInWithEmail', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.SignInWithEmail}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('ErrorWithBloom', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ErrorWithBloom}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('Confirm', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.Confirm}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('Verified', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.Verified}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('Verifying', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.Verifying}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('VerifiedError', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.VerifiedError}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('Reset', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.Reset}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('ResetOK', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ResetOK}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('ResetError', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ResetError}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('ResetConfirm', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ResetConfirm}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('ResetPasswordInput', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ResetPasswordInput}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('BorrowerSignUp', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.BorrowerSignUp}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('BorrowerSignUpError', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ResetPasswordInput}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('BorrowerSignUpOK', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.BorrowerSignUpOK}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('ResendValidationEmail', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        initStep={Step.ResendValidationEmail}
        onClose={() => {}}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('Mini', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        onClose={() => {}}
        initStep={Step.SignIn}
        initStep={Step.StartMini}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignInWithEmailMini', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        onClose={() => {}}
        initStep={Step.SignIn}
        initStep={Step.SignInWithEmailMini}
        pathRedirect={window.location.pathname}
      />
    </div>
  ))
  .add('SignUpWithEmailMini', () => (
    <div style={{ padding: 10 }}>
      <Onboarding
        blur={false}
        open={true}
        history={{
          location: window.location,
        }}
        closeButton
        onClose={() => {}}
        initStep={Step.SignIn}
        initStep={Step.SignUpWithEmailMini}
        pathRedirect={window.location.pathname}
      />
    </div>
  ));
