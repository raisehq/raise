import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const NotFound: React.SFC = () => (
  <Dimmer active inverted>
    <Loader inverted>Loading</Loader>
  </Dimmer>
);

export default NotFound;
