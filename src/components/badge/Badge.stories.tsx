import React from 'react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import Badge from './Badge';

export default {
  title: '3. Components/Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const basic = () => (
  <Badge
    count={number("count", 100)}
    showZero={boolean("showZero", false)}
    overflowCount={number("overflowCount", 99)}
    color={text("color", "")}
  >
    <button>99</button>
  </Badge>
);

export const dot = () => (
  <Badge
    count={number('count', 100)}
    showZero={boolean('showZero', false)}
    overflowCount={number('overflowCount', 99)}
    color={text('color', '')}
  />
);
