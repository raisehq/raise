import React from 'react';

import { getCalculations } from '../../../utils/loanUtils';

const BorrowerHeader = ({ auction }) => {
  const values = auction ? getCalculations(auction) : null;
  return auction ? (
    <div>
      <div>{values && values.principal}</div>
    </div>
  ) : null;
};

export default BorrowerHeader;
