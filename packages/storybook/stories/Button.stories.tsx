import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonLink, BloomButton } from '@raisehq/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
`;

const WrapperLink = styled.div`
  height: 100%;
  padding: 50px;
  width: 400px;
`;

const props = {
  onClick: () => {},
  text: 'Raise',
};

storiesOf('Buttons', module)
  .add('Primary', () => (
    <Wrapper>
      <h1>Patterns</h1>
      <Button {...props} size="large" type="primary" />
      <Button {...props} size="standard" type="primary" />
      <Button {...props} size="small" type="primary" />
      <h1>Fullwidth</h1>
      <Button {...props} size="large" type="primary" fullWidth />
    </Wrapper>
  ))
  .add('Secondary', () => (
    <Wrapper>
      <h1>Patterns</h1>
      <Button {...props} size="large" type="secondary" />
      <Button {...props} size="standard" type="secondary" />
      <Button {...props} size="small" type="secondary" />
      <h1>Fullwidth</h1>
      <Button {...props} size="large" type="secondary" fullWidth />
    </Wrapper>
  ))
  .add('Tertiary', () => (
    <Wrapper>
      <h1>Patterns</h1>
      <Button {...props} size="large" type="tertiary" />
      <Button {...props} size="standard" type="tertiary" />
      <Button {...props} size="small" type="tertiary" />
      <h1>Fullwidth</h1>
      <Button {...props} size="large" type="tertiary" fullWidth />
    </Wrapper>
  ))
  .add('Quaternary', () => (
    <Wrapper>
      <h1>Patterns</h1>
      <Button {...props} size="large" type="quaternary" />
      <Button {...props} size="standard" type="quaternary" />
      <Button {...props} size="small" type="quaternary" />
      <h1>Fullwidth</h1>
      <Button {...props} size="large" type="quaternary" fullWidth />
    </Wrapper>
  ))
  .add('Quinary', () => (
    <Wrapper>
      <h1>Patterns</h1>
      <Button {...props} size="large" type="quinary" />
      <Button {...props} size="standard" type="quinary" />
      <Button {...props} size="small" type="quinary" />
      <h1>Fullwidth</h1>
      <Button {...props} size="large" type="quinary" fullWidth />
    </Wrapper>
  ))
  .add('Button With Logo', () => (
    <WrapperLink>
      <ButtonLink
        {...props}
        size="large"
        type="primary"
        icon="arrow_right.png"
        logo="kyc/sumsub_icon_80x80.png"
        fullWidth
        text="Sum&Substance"
      />
    </WrapperLink>
  ))
  .add('Bloom Button', () => (
    <WrapperLink>
      <BloomButton {...props} size="large" text="with" fullWidth />
    </WrapperLink>
  ));
