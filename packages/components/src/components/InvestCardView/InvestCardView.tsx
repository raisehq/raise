import React, { useState, ReactChild } from 'react';
import BN from 'bn.js';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { CardBottom, InvestCardBody } from './InvestCardView.styles';
import Card from '../Card';
import AuctionAPR from '../Graphs/APRGraph';
import { Times } from '../../types';
import InvestInfo from './InvestInfo';
import CardPlaceholder from '../CardPlaceholder';

const BottomInfo = styled(Card.Grid)`
  z-index: 10;
  position: relative;
  background: white;
  padding: 20px 0px;
  margin: 0;
`;

interface InvestProps {
  companyName: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
  currentAmount: number;
  totalAmount: number;
  maxAmount: string;
  times: Times;
  currentAPR: string;
  principal: string;
  investorCount: string;
  maxInterestRate: BN;
  minInterestRate: BN;
  auctionStartTimestamp: number;
  auctionEndTimestamp: number;
  className?: string;
  link?: boolean;
  children?: ReactChild;
  coinIcon: string;
}

const InvestCardView: React.SFC<InvestProps> = (props: InvestProps) => {
  const {
    companyName,
    children,
    className,
    currentAPR,
    times,
    investorCount,
  } = props;

  const [viewGraph, setGraphView] = useState(0);

  const onOpenGraph = () => {
    setGraphView(viewGraph ? 0 : 1);
  };

  const AuctionGraph = <AuctionAPR onOpenGraph={onOpenGraph} {...props} />;

  const domList = [
    { key: 0, component: <InvestInfo onOpenGraph={onOpenGraph} {...props} /> },
    { key: 1, component: AuctionGraph },
  ];

  const [previousTab, setPreviousTab] = useState(viewGraph);

  const transitions = useTransition(domList[viewGraph], (i) => i.key, {
    unique: true,
    from: () => ({
      transform: `translate3d(0,${(viewGraph - previousTab) * 100}%, 0)`,
      position: 'static',
      zIndex: 3,
    }),
    enter: {
      transform: 'translate3d(0%,0,0)',
      position: 'static',
      zIndex: 3,
    },
    leave: () => ({
      transform: `translate3d(0,${(previousTab - viewGraph) * 100}%,0)`,
      position: 'absolute',
      right: 3,
      top: 0,
      zIndex: 3,
    }),
  });

  if (!companyName) {
    return <CardPlaceholder />;
  }

  if (viewGraph !== previousTab) setPreviousTab(viewGraph);

  return (
    <InvestCardBody style={{ overflow: 'hidden' }} className={className}>
      <div
        style={{
          overflow: 'hidden',
          height: '100%',
          zIndex: 3,
          position: 'relative',
        }}
      >
        {transitions.map(({ item, key, props: pro }) => (
          <animated.div style={pro} key={key}>
            {item.component}
          </animated.div>
        ))}
        <BottomInfo alignCenter>
          <Card.Row notop small title="Current APR" content={currentAPR} />
          <Card.Vertical />
          <Card.Row notop small title="Investors" content={investorCount} />
          <Card.Vertical />
          <Card.Row
            notop
            small
            title="Days Left"
            content={times.auctionTimeLeft}
          />
          <Card.Row small title="Loan Term" content={times.loanTerm} />
        </BottomInfo>
      </div>
      <CardBottom>{children}</CardBottom>
    </InvestCardBody>
  );
};

export default InvestCardView;
