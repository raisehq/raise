import React, { useState, ReactChild } from 'react';
import BN from 'bn.js';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { GraphButton, CardContent, CardBottom } from './InvestCard.styles';
import Card from '../Card';
import Amount from '../Amount';
import AuctionAPR from '../Graphs/APRGraph';
interface InvestProps {
  companyName: string;
  shortDescription: string;
  background: string;
  logo: string;
  slug: string;
  currentAmount: number;
  totalAmount: number;
  maxAmount: number;
  times: any;
  currentAPR: string;
  principal: string;
  investorCount: string;
  children?: ReactChild;
  maxInterestRate: BN;
  minInterestRate: BN;
  auctionStartTimestamp: number;
  auctionEndTimestamp: number;
}

const Loan: React.SFC<InvestProps> = (props: InvestProps) => {
  const {
    companyName,
    shortDescription,
    background,
    logo,
    slug,
    currentAmount,
    totalAmount,
    maxAmount,
    times,
    currentAPR,
    principal,
    investorCount,
    children
  } = props;
  const [viewGraph, setGraphView] = useState(0);
  const auctionTimeLeft = `${times.auctionTimeLeft} left`;
  const borrowerUrl = `/borrowers/${slug}`;

  const onOpenGraph = () => {
    setGraphView(viewGraph ? 0 : 1);
  };

  const SuggestedBody = (
    <>
      <Card.Image to={borrowerUrl} src={background} />
      <CardContent to={borrowerUrl} topRight={auctionTimeLeft} logo={logo}>
        <Link to={borrowerUrl}>
          <Card.BorrowerTitle>{companyName}</Card.BorrowerTitle>
          <Card.Description>{shortDescription}</Card.Description>
        </Link>
        <Card.Grid spaceBetween alignBottom nobottom>
          <Card.Header title="Raised so far" amount={<Amount principal={principal} />} />
          <Card.Header title="Target" amount={<Amount principal={maxAmount} />} />
        </Card.Grid>
        <Card.Progress color="#eb3f93" currentAmount={currentAmount} totalAmount={totalAmount} />
      </CardContent>
    </>
  );

  const AuctionGraph = <AuctionAPR {...props} />;

  const domList = [
    { key: 0, component: SuggestedBody },
    { key: 1, component: AuctionGraph }
  ];

  const [previousTab, setPreviousTab] = useState(viewGraph);

  const transitions = useTransition(domList[viewGraph], i => i.key, {
    unique: true,
    from: () => ({
      transform: `translate3d(0,${(viewGraph - previousTab) * 100}%, 0)`,
      position: 'static'
    }),
    enter: {
      transform: 'translate3d(0%,0,0)',
      position: 'static'
    },
    leave: () => ({
      transform: `translate3d(0,${(previousTab - viewGraph) * 100}%,0)`,
      position: 'absolute'
    })
  });
  if (viewGraph !== previousTab) setPreviousTab(viewGraph);
  return (
    <Card style={{ overflow: 'hidden' }}>
      <div style={{ overflow: 'hidden', height: '100%', zIndex: 3, position: 'relative' }}>
        {transitions.map(({ item, key, props }) => (
          <animated.div style={props} key={key}>
            {item.component}
          </animated.div>
        ))}
      </div>
      <CardBottom>
        <Card.Grid alignCenter>
          <Card.Row notop small title="Loan Term" content={times.loanTerm} />
          <Card.Vertical />
          <Card.Row notop small title="Investors" content={investorCount} />
          <GraphButton basic onClick={onOpenGraph}>
            {viewGraph === 0 ? (
              <>
                <Icon name="line graph" size="large" />
                <Card.Row notop small title="Current APR" content={currentAPR} />
              </>
            ) : (
                <span> Go Back</span>
              )}
          </GraphButton>
        </Card.Grid>
        {children}
      </CardBottom>
    </Card>
  );
};

export default Loan;
