import React from 'react';
import { storiesOf } from '@storybook/react';
import LogoHeaderComponent from './LogoHeaderComponent';
import './LogoHeaderComponent.story.css';

storiesOf('LogoHeaderComponent', module).add('Logo Header', () =>
  <LogoHeaderComponent />
);
