import React from 'react';
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs';
import Badge from './Badge';

export default {
  title: '3. Components/Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const basic = () => (
  <div>
    <div
      style={{ display: "flex", width: 200, justifyContent: "space-between" }}
    >
      <Badge count={100} type="primary" />
      <Badge count={100} type="secondary" />
      <Badge count={100} type="danger" />
      <Badge count={100} />
    </div>
    <div style={{ display: "flex", marginTop: 20 }}>
      <div style={{ margin: "0 10px" }}>
        <Badge dot type="primary" />
      </div>
      <div style={{ margin: "0 10px" }}>
        <Badge dot type="danger" />
      </div>
      <div style={{ margin: "0 10px" }}>
        <Badge dot type="success" />
      </div>
    </div>
  </div>
);