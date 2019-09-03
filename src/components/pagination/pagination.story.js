import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';

storiesOf('Pagination', module)
  .add('without props', () => (
    <Pagination />
  ))
  .add('with props', () => (
    <Pagination total={15} activePage={8} />
  ));