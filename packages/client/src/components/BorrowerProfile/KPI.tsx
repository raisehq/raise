import React from 'react';
import { KPI as KPIProps } from '../../interfaces/BorrowerProfile';

import { KPIBox, KPIListBox, KPIItem, KPISeparator, KPIItemLabel, KPIItemValue } from './BorrowerProfile.styles';

interface KPIListProps {
  kpis: KPIProps[];
}

export const KPI: React.SFC<KPIProps> = ({ kpi, label }: KPIProps) => (
  <KPIBox>
    <KPIItem>
      <KPIItemLabel>{label}</KPIItemLabel>
      <KPIItemValue>{kpi}</KPIItemValue>
    </KPIItem>
    <KPISeparator />
  </KPIBox>
);

export const KPIList: React.SFC<KPIListProps> = ({ kpis }: KPIListProps) => (
  <KPIListBox>
    {kpis.map(({ label, ...rest }) => (
      <KPI key={label} label={label} {...rest} />
    ))}
  </KPIListBox>
);
