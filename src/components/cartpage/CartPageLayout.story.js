import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import CartPageLayout from './CartPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './../catalogpage/LogoHeaderComponent';
import ProductTableComponent from './ProductTableComponent';
import PriceTableComponent from './PriceTableComponent';
import './CartPageLayout.story.css';

const items = [
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
];

storiesOf('CartPageLayout', module)
  .addDecorator(StoryRouter())
  .add('Working Layout', () =>
    <CartPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <ProductTableComponent items={items} />
      <PriceTableComponent items={items} />
    </CartPageLayout>
  );
