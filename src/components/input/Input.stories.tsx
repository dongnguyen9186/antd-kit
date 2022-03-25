import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Input from './Input';

export default {
  title: '3. Components/Input/Input',
  component: Input,
  decorators: [withKnobs],
};

export const simple = () => <Input placeholder='Text input' />;
