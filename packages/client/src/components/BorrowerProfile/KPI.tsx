import React from 'react';
import numeral from '../../commons/numeral';
import { KPI as KPIProps } from '../../interfaces/BorrowerProfile';

import { KPIBox, KPIListBox } from './BorrowerProfile.styles';

interface KPIListProps {
  kpis: KPIProps[];
}

export const KPI: React.SFC<KPIProps> = ({ kpi, label }: KPIProps) => (
  <KPIBox>
    <div>{numeral(kpi).format('0%')}</div>
    <div>{label}</div>
  </KPIBox>
);

export const KPIList: React.SFC<KPIListProps> = ({ kpis }: KPIListProps) => (
  <KPIListBox>
    {kpis.map(({ label, ...rest }) => (
      <KPI key={label} label={label} {...rest} />
    ))}
  </KPIListBox>
);
