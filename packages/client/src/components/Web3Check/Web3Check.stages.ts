import Daggy from 'daggy';

const Stages = Daggy.taggedSum('UI', {
  WalletConnectForm: [],
  WalletSetUp: [],
  WalletSelector: [],
  WalletConnect: [],
  WalletError: [],
  Checks: []
});

export default Stages;
