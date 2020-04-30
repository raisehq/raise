import daggy from 'daggy';

const Stages = daggy.taggedSum('UI', {
  Confirm: [],
  Processing: [],
  Success: [],
  Error: []
});

export default Stages;
