import React from 'react';
import { Button } from './Button';
import { Icon } from '../icons';

export default {
  title: 'Components/Button',
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
    isDisabled: {
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
    isFullWidth: {
      description: 'Used to give the icon full width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: 'Click Me',
  alignItems: 'center',
  isLoading: true,
};

export const PrimaryFullWidth = Template.bind({});
PrimaryFullWidth.args = {
  children: 'Click Me',
  isFullWidth: true,
};

export const PrimaryIconRight = Template.bind({});
PrimaryIconRight.args = {
  children: 'Click Me',
  rightIcon: <Icon name="arrowRight" />,
};

export const PrimaryIconRightFullWidth = Template.bind({});
PrimaryIconRightFullWidth.args = {
  children: 'Click Me',
  isFullWidth: true,
  rightIcon: <Icon name="arrowRight" />,
};

export const PrimaryIconRightLongLabelWrapping = Template.bind({});
PrimaryIconRightLongLabelWrapping.args = {
  children: 'Start your free trial today',
  width: '166px',
  rightIcon: <Icon name="arrowRight" />,
};

export const PrimaryIconLeft = Template.bind({});
PrimaryIconLeft.args = {
  children: 'Click Me',
  leftIcon: <Icon name="arrowLeft" />,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Click Me',
  isDisabled: true,
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
  rightIcon: <Icon name="arrowRight" />,
};

export const SecondaryIconRightLongLabelWrapping = Template.bind({});
SecondaryIconRightLongLabelWrapping.args = {
  children: 'Start your free trial today',
  width: '166px',
  variant: 'secondary',
  rightIcon: <Icon name="arrowRight" />,
};

export const SecondaryIconLeft = Template.bind({});
SecondaryIconLeft.args = {
  children: 'Click Me',
  variant: 'secondary',
  leftIcon: <Icon name="arrowLeft" />,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Click Me',
  variant: 'secondary',
  isDisabled: true,
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
  rightIcon: <Icon name="arrowRight" />,
};

export const TertiaryIconRightLongLabelWrapping = Template.bind({});
TertiaryIconRightLongLabelWrapping.args = {
  children: 'Start your free trial today',
  width: '166px',
  variant: 'tertiary',
  rightIcon: <Icon name="arrowRight" />,
};

export const TertiaryIconLeft = Template.bind({});
TertiaryIconLeft.args = {
  children: 'Click Me',
  variant: 'tertiary',
  leftIcon: <Icon name="arrowLeft" />,
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  children: 'Click Me',
  variant: 'tertiary',
  isDisabled: true,
};
