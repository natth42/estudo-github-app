import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/pagination/pagination.story.js');
}

configure(loadStories, module);
