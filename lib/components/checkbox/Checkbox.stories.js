import React from 'react';
import {
  CheckboxGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
} from '../../main';
import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: {
      description: 'if checkbox is checked',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isReadOnly: {
      description: 'if checkbox is read only',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isInvalid: {
      description: 'if checkbox is invalid',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isIndeterminate: {
      description: 'if checkbox is indeterminate',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultIsChecked: {
      description: 'if checkbox is default checked',
      table: {
        type: { summary: 'bool' },
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
        type: 'dynamic',
      },
    },
  },
};

const Template = (args) => (
  <FormControl>
    <Checkbox {...args} />
  </FormControl>
);

export const Default = Template.bind({});
Default.args = { children: 'Checkbox' };

export const Checked = Template.bind({});
Checked.args = { children: 'Checkbox', isChecked: true };

export const DefaultInvalid = Template.bind({});
DefaultInvalid.args = { children: 'Checkbox', isInvalid: true };

export const CheckedInvalid = Template.bind({});
CheckedInvalid.args = {
  children: 'Checkbox',
  isChecked: true,
  isInvalid: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  children: 'Checkbox',
  isReadOnly: true,
};

export const CheckedReadOnly = Template.bind({});
CheckedReadOnly.args = {
  children: 'Checkbox',
  isChecked: true,
  isReadOnly: true,
};

export const CheckedIndeterminate = Template.bind({});
CheckedIndeterminate.args = {
  children: 'Checkbox',
  isChecked: true,
  isIndeterminate: true,
};

export const CheckboxGroupHorizontalTemplate = () => (
  <FormControl>
    <FormLabel variant="checkbox">Vegetables</FormLabel>
    <CheckboxGroup horizontal>
      <Checkbox>Arugula</Checkbox>
      <Checkbox>Asparagus</Checkbox>
    </CheckboxGroup>
  </FormControl>
);

export const CheckboxGroupVerticalTemplate = () => (
  <FormControl isInvalid>
    <FormLabel variant="checkbox">Fruits</FormLabel>
    <CheckboxGroup>
      <Checkbox>Apples</Checkbox>
      <Checkbox>Oranges</Checkbox>
    </CheckboxGroup>
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);

export const CheckboxGroupVerticalMultilineTemplate = () => (
  <Flex maxWidth="250px">
    <FormControl>
      <FormLabel variant="checkbox">Why FireHydrant</FormLabel>
      <CheckboxGroup>
        <Checkbox isChecked>
          Everything you need to respond to an incident
        </Checkbox>
        <Checkbox>Create consistent incident processes, fast</Checkbox>
        <Checkbox>Give copy and paste a break</Checkbox>
      </CheckboxGroup>
      <FormHelperText>Describe why use FireHydrant</FormHelperText>
    </FormControl>
  </Flex>
);
