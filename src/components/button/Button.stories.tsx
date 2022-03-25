import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: '3. Components/Button/Button',
  decorators: [withKnobs],
  component: Button,
};

export const simple = () => (
  <>
    <Button
      type={select("type", ["primary", "default", "link"], "default")}
      disabled={boolean("disabled", false)}
      danger={boolean("danger", false)}
      loading={boolean("loading", false)}
      size={"large"}
      className={select("className", ["secondary", ""], "")}
    >
      Button
    </Button>
  </>
);
