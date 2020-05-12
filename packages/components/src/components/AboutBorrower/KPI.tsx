import React from 'react';
import { Icon } from 'semantic-ui-react';
import { KPI as KPIProps } from './interfaces';

import {
  KPIBox,
  KPIListBox,
  KPIItem,
  KPISeparator,
  KPIItemLabel,
  KPIItemValue,
  KPITooltip,
  KPILabel,
  KPIIcon,
} from './styles';

interface KPIListProps {
  kpis: KPIProps[];
}

export const KPI: React.SFC<KPIProps> = ({ kpi, label, tooltip }: KPIProps) => (
  <KPIBox>
    <KPIItem>
      <KPILabel>
        <KPIItemLabel>{label}</KPIItemLabel>
        {tooltip && (
          <KPIIcon>
            <KPITooltip
              content={tooltip}
              inverted
              position="center top"
              trigger={<Icon color="teal" name="info circle" />}
            />
          </KPIIcon>
        )}
      </KPILabel>
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
