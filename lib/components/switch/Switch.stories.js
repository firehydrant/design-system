import React from 'react';
import { Switch } from './Switch';
import { FormControl, SwitchLabel } from '../../main';

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
  argTypes: {
    isChecked: {
      description: 'if switch is checked',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isReadOnly: {
      description: 'if switch is read only',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => (
  <FormControl display="flex" alignItems="center">
    <SwitchLabel htmlFor="email-alerts" mr="2">
      Label
    </SwitchLabel>
    <Switch {...args} id="email-alerts" />
  </FormControl>
);

export const Default = Template.bind({});
Default.args = {};

export const ReadOnly = () => (
  <FormControl isReadOnly display="flex" alignItems="center">
    <SwitchLabel htmlFor="read-only" mr="2">
      Label
    </SwitchLabel>
    <Switch isReadOnly id="read-only" />
  </FormControl>
);

export const ReadOnlyChecked = () => (
  <FormControl isReadOnly display="flex" alignItems="center">
    <SwitchLabel htmlFor="read-only" mr="2">
      Label
    </SwitchLabel>
    <Switch isChecked isReadOnly id="read-only" />
  </FormControl>
);
