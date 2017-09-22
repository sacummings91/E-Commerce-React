import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import FooterComponent from './FooterComponent';

storiesOf('FooterComponent', module)
  .addDecorator(StoryRouter())
  .add('Footer', () => <FooterComponent />);
