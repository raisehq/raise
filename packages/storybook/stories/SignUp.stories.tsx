import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { SignUp } from '@raisehq/components';

export const Right = (x: any) => ({
  map: (f: any) => Right(f(x)),
  fold: (f: any, g: any) => g(x),
  inspect: () => `Right(${x})`,
});

export const to = (promise: any) => promise.then(Right).catch(Left);

export const Left = (x: any) => ({
  map: () => Left(x),
  fold: (f: any) => f(x),
  inspect: () => `Left(${x})`,
});

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

storiesOf('SignUp', module)
  .add('SignUp Generic', () => (
    <Wrapper>
      <SignUp
        onSignUp={() => {}}
        checkEmail={() => Right('Not exist')}
        SignUpId="test"
        onBloomSignUp={() => {}}
        bloomSignIn={() => 'https://api.herodev.es/kyc/scan'}
        redirectFromBloomApp={() => {}}
        isUserSignedUp={() => {}}
      />
    </Wrapper>
  ))
  .add('SignUp Email Success', () => (
    <Wrapper>
      <SignUp
        onSignUp={() => true}
        checkEmail={() => Right('Not exist')}
        SignUpId="test"
        onBloomSignUp={() => {}}
        bloomSignIn={() => 'https://api.herodev.es/kyc/scan'}
        redirectFromBloomApp={() => {}}
        isUserSignedUp={() => {}}
      />
    </Wrapper>
  ))
  .add('SignUp Email Error', () => (
    <Wrapper>
      <SignUp
        onSignUp={() => false}
        checkEmail={() => Right('Not exist')}
        SignUpId="test"
        onBloomSignUp={() => {}}
        bloomSignIn={() => 'https://api.herodev.es/kyc/scan'}
        redirectFromBloomApp={() => {}}
        isUserSignedUp={() => Left('error')}
      />
    </Wrapper>
  ));
