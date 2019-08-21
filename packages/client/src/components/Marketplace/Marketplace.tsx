import React from 'react';
import { InvestModal } from '../InvestModal';
const Marketplace = () => {
  const investProps = {
    loan: {

    }
  }
  return (
    <div>
      HOLA FROM Marketplace
      <InvestModal {...investProps} />
    </div>
  )
};

export default Marketplace;
