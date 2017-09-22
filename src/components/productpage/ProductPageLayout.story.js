import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ProductPageLayout from './ProductPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './../catalogpage/LogoHeaderComponent';
import IndividualItemComponent from './IndividualItemComponent';

storiesOf('ProductPageLayout', module)
  .addDecorator(StoryRouter())
  .add('Working Layout', () =>
    <ProductPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <IndividualItemComponent
        item={{
          id: 1,
          name: 'Black Tee',
          description: 'yahoooooooo',
          price: 24.99,
          imageUrl: '//via.placeholder.com/350x350'
        }}
      />
    </ProductPageLayout>
  );
