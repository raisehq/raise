import Daggy from 'daggy';

const Stages = Daggy.taggedSum('UI', {
  WalletConnectForm: [],
  WalletSetUp: [],
  WalletSelector: [],
  WalletConnect: ['hasWallet'],
  Checks: []
});

export default Stages;
