import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductTableComponent from './ProductTableComponent';

storiesOf('ProductTableComponent', module).add('Product Table', () =>
  <ProductTableComponent
    items={[
      {
        id: 101,
        name: 'Black Tee',
        price: 24.99,
        imageUrl: '//via.placeholder.com/264x264'
      },
      {
        id: 102,
        name: 'White Tee',
        price: 24.99,
        imageUrl: '//via.placeholder.com/264x264'
      },
      {
        id: 103,
        name: 'Tie Dye Tee',
        price: 26.99,
        imageUrl: '//via.placeholder.com/264x264'
      },
      {
        id: 104,
        name: 'Grey Tee',
        price: 24.99,
        imageUrl: '//via.placeholder.com/264x264'
      }
    ]}
  />
);
