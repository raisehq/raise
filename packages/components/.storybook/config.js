import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/general.css';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

addParameters({
  options: {
    theme: themes.dark
  }
});
