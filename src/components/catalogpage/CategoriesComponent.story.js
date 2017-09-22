import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import CategoriesComponent from './CategoriesComponent';

storiesOf('CategoriesComponent', module)
  .addDecorator(StoryRouter())
  .add('Categories', () => <CategoriesComponent />);
