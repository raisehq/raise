import React, { Fragment } from 'react';
import daggy from 'daggy';
import { Loader} from 'semantic-ui-react';

const UI = daggy.taggedSum('UI', {
  None: [],
  Success: [],
  Waiting: [],
  Error: []
});

const getViewResponse = (ui: any) =>
  ui.cata({
    None: () => (
        <Fragment>
        </Fragment>
    ),
    Success: () => (
      <Fragment>
        <p>
            Success!
        </p>
      </Fragment>
    ),
    Waiting: () => (
      <Fragment>
        <p>Waiting confirmation...</p>
        <Loader />
      </Fragment>
    ),
    Error: () => (
      <Fragment>
          <p>Transaction error. Try again or contact support.</p>
      </Fragment>
    )
  });

export { getViewResponse, UI };
