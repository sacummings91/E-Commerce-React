import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import CatalogPageLayout from './CatalogPageLayout';
import NavbarComponent from './../NavbarComponent';
import LogoHeaderComponent from './LogoHeaderComponent';
import CategoriesComponent from './CategoriesComponent';
import ClothingItemsComponent from './../ClothingItemsComponent';
import FooterComponent from './../FooterComponent';
import './CatalogPageLayout.story.css';

storiesOf('CatalogPageLayout', module)
  .addDecorator(StoryRouter())
  .add('Working Layout', () =>
    <CatalogPageLayout>
      <NavbarComponent />
      <LogoHeaderComponent />
      <CategoriesComponent />
      <ClothingItemsComponent
        items={[
          {
            id: 101,
            name: 'Black Tee',
            price: 24.99,
            imageUrl: '//via.placeholder.com/200x250'
          },
          {
            id: 102,
            name: 'White Tee',
            price: 24.99,
            imageUrl: '//via.placeholder.com/200x250'
          },
          {
            id: 103,
            name: 'Tie Dye Tee',
            price: 26.99,
            imageUrl: '//via.placeholder.com/200x250'
          },
          {
            id: 104,
            name: 'Grey Tee',
            price: 24.99,
            imageUrl: '//via.placeholder.com/200x250'
          }
        ]}
      />
      <FooterComponent />
    </CatalogPageLayout>
  );
