import Daggy from 'daggy';

const Stages = Daggy.taggedSum('UI', {
  WalletConnectForm: [],
  WalletSetUp: [],
  WalletSelector: [],
  WalletConnect: [],
  Checks: []
});

export default Stages;
