import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Segment>
    <Header>Nothing here to see</Header>
    <p>Click in the button below to go home.</p>
    <Button primary as={Link} to="/">
      Return to home
    </Button>
  </Segment>
);

export default NotFound;
