import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import ClothingItemComponent from './ClothingItemComponent';
import './ClothingItemComponent.story.css';

storiesOf('ClothingItemComponent', module)
  .addDecorator(StoryRouter())
  .add('Clothing Item', () =>
    <ClothingItemComponent
      item={{
        name: 'Black Tee',
        price: 24.99,
        imageUrl: '//via.placeholder.com/264x264'
      }}
    />
  )
  .add('Incomplete Data', () =>
    <ClothingItemComponent
      item={{
        name: 'Some Item A',
        imageUrl: '//via.placeholder.com/300x200'
      }}
    />
  )
  .add('Empty Item Passed In', () => <ClothingItemComponent item={{}} />);
