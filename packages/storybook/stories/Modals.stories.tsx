import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  BigSimpleModal,
  Panel,
  PanelWithImage,
  Simple,
} from '@raisehq/components';

storiesOf('Modal', module)
  .add('BigSimpleModal', () => (
    <BigSimpleModal open={true} blur={true}>
      <h1>SIMPLEM MODAL</h1>
    </BigSimpleModal>
  ))
  .add('Panel', () => (
    <Panel open={true} blur={true}>
      <h1>SIMPLEM MODAL</h1>
    </Panel>
  ))
  .add('PanelWithImage', () => (
    <PanelWithImage open={true} blur={true}>
      <h1>PANEL WITH IMAGE</h1>
    </PanelWithImage>
  ))
  .add('Simple', () => (
    <Simple open={true} blur={true}>
      <h1>SIMPLE</h1>
    </Simple>
  ));
