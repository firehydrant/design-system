import React from 'react';
import { Button } from './Button';
import { ArrowRightIcon } from '../icons';

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
    rightIcon: {
      description: 'Icon Component on right of text',
      table: {
        type: { summary: 'icon' },
      },
    },
    leftIcon: {
      description: 'Icon Component on left of text',
      table: {
        type: { summary: 'icon' },
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
};

export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.args = {
  children: 'Click Me',
  rightIcon: <ArrowRightIcon />,
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

export const SecondaryIconRight = Template.bind({});
SecondaryIconRight.args = {
  children: 'Click Me',
  variant: 'secondary',
  rightIcon: <ArrowRightIcon />,
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

export const TertiaryIconRight = Template.bind({});
TertiaryIconRight.args = {
  children: 'Click Me',
  variant: 'tertiary',
  rightIcon: <ArrowRightIcon />,
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  children: 'Click Me',
  variant: 'tertiary',
  disabled: true,
};
