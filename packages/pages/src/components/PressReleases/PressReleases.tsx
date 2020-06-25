import React from 'react';
import { PressPR } from '@raisehq/components';
import { Wrapper, Title } from './styles';

const PressReleases = ({ data, title }): any => (
  <Wrapper>
    <Title>{title}</Title>
    <PressPR data={data} />
  </Wrapper>
);

export default PressReleases;
