import React from 'react';
import { ResumeItemProps } from '../../../interfaces/Invest';
import { ResumeItemBoxBig } from '../styles';

export const ResumeItemBig: React.SFC<ResumeItemProps> = ({ title, value }: any) => (
  <ResumeItemBoxBig>
    <p>{title}</p>
    <p>{value}</p>
  </ResumeItemBoxBig>
);

export default ResumeItemBig;
