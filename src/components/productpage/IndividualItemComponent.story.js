import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import IndividualItemComponent from './IndividualItemComponent';
import './IndividualItemComponent.story.css';

storiesOf('IndividualItemComponent', module)
  .addDecorator(StoryRouter())
  .add('Individual Item', () =>
    <IndividualItemComponent
      item={{
        id: 1,
        name: 'Black Tee',
        description: 'lalalalalalala',
        price: 24.99,
        imageUrl: '//via.placeholder.com/350x350'
      }}
    />
  );
