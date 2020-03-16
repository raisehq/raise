import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

addDecorator(story => <Router initialEntries={['/foo']}>{story()}</Router>);

// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
