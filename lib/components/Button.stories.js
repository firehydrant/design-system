import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Click Me',
  disabled: true,
};
