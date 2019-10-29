import React from 'react';
import { CardContent } from './AuctionAPR.styles';
import APRGraph from '../Graphs/APRGraph';

interface LoanProps {
  auction: any;
  calcs: any;
}

const AuctionAPR: React.SFC<LoanProps> = ({ auction, calcs }: LoanProps) => {
  return (
    <CardContent>
      <APRGraph auction={auction} calcs={calcs} />
    </CardContent>
  );
};

export default AuctionAPR;
