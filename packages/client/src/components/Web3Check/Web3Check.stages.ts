import Daggy from 'daggy';

const Stages = Daggy.taggedSum('UI', {
  WalletSelector: [],
  WalletConnect: [],
  WalletError: [],
  Checks: []
});

export default Stages;
