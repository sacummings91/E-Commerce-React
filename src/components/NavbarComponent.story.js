import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import NavbarComponent from './NavbarComponent';
import './NavbarComponent.story.css';

storiesOf('NavbarComponent', module)
  .addDecorator(StoryRouter())
  .add('Navbar', () => <NavbarComponent />);
