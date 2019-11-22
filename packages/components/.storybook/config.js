import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

addDecorator(story => (
  <Router initialEntries={['/foo']}>{story()}</Router>
))

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/components', true, /\.stories\.tsx?$/), module)
