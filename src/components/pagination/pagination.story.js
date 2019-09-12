import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './index';

storiesOf('Pagination', module)
  .add('without props', () => (
    <Pagination />
  ))
  .add('with total and activePage', () => (
    <Pagination total={10} activePage={3} />
  ))
  .add('with callback', () => (
    <Pagination total={15} activePage={8} onClick={(page) => window.alert(page)} />
  ));