import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductFormComponent from './ProductFormComponent';
import './ProductFormComponent.story.css';

storiesOf('ProductFormComponent', module).add('Product Form', () =>
  <ProductFormComponent />
);
