import React from 'react';
import { IconButton } from './IconButton';
import { Icon } from '../icons';

export default {
  title: 'IconButton',
  component: IconButton,
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
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'component to use all our icons',
      table: {
        type: {
          summary: `arrowDown|arrowLeft|arrowRight|arrowUp|check|chevronDown|chevronLeft|chevronRight|chevronUp|close|del|edit|error|externalLink|help|info|plus|settings|starFilled|starOutline|success|warning`,
        },
        defaultValue: { summary: 'n/a' },
      },
      control: {
        type: 'select',
        options: [
          'account',
          'arrowDown',
          'arrowLeft',
          'arrowRight',
          'arrowUp',
          'check',
          'chevronDown',
          'chevronLeft',
          'chevronRight',
          'chevronUp',
          'close',
          'delete',
          'edit',
          'error',
          'externalLink',
          'file',
          'help',
          'import',
          'info',
          'mail',
          'minus',
          'plus',
          'search',
          'settings',
          'starFilled',
          'starOutline',
          'success',
          'refresh',
          'team',
          'warning',
        ],
      },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'arrowRight',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  name: 'arrowRight',
  isDisabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'arrowRight',
  variant: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  name: 'arrowRight',
  variant: 'secondary',
  isDisabled: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  name: 'arrowRight',
  variant: 'tertiary',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  name: 'arrowRight',
  variant: 'tertiary',
  isDisabled: true,
};
