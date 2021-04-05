import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'different types of buttons',
      table: {
        type: { summary: 'primary|secondary|tertiary' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    disabled: {
      description: 'if button is disabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Click Me',
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click Me',
  variant: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Click Me',
  variant: 'secondary',
  disabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Click Me',
  variant: 'tertiary',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  children: 'Click Me',
  variant: 'tertiary',
  disabled: true,
};
