import React from 'react';
import { Dimmer, Segment, Loader } from 'semantic-ui-react';

const NotFound: React.SFC = () => (
  <Segment>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  </Segment>
)

export default NotFound;
