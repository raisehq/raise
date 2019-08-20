import React from 'react';
import { DashboardTab } from './Dashboard.styles';

const panes = [
  {
    menuItem: 'Live auctions',
    render: () => <DashboardTab.Pane>tab 1</DashboardTab.Pane>
  },
  {
    menuItem: 'Active loans',
    render: () => <DashboardTab.Pane>tab 2</DashboardTab.Pane>
  }
];

const Tabs = () => {
  return (
    <DashboardTab menu={{ secondary: true, pointing: true }} panes={panes} />
  );
};

export default Tabs;
