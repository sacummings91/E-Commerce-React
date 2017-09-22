import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import AdminPageLayout from './AdminPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './../catalogpage/LogoHeaderComponent';
import ProductFormComponent from './ProductFormComponent';

storiesOf('AdminPageLayout', module)
  .addDecorator(StoryRouter())
  .add('Working Layout', () =>
    <AdminPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <ProductFormComponent />
    </AdminPageLayout>
  );
