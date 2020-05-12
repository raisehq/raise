import Daggy from 'daggy';

const Stages = Daggy.taggedSum('Stages', {
  Success: [],
  Error: [],
  Register: []
});

export default Stages;
