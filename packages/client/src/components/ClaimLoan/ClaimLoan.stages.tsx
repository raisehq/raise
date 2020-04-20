import daggy from 'daggy';

const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Success: [],
  Error: []
});

export default Stages;
