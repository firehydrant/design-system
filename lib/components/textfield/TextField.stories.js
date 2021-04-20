import React from 'react';
import { TextField } from './TextField';
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '../../main';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    isInvalid: {
      description: 'if input is invalid',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isReadOnly: {
      description: 'if input is read only',
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

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Normal = Template.bind({});
Normal.args = {
  defaultValue: 'Value',
};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
  defaultValue: 'Value',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  isReadOnly: true,
  defaultValue: 'Value',
};

export const WithLabel = (args) => (
  <FormControl id="name">
    <FormLabel>Name</FormLabel>
    <TextField name="name" {...args} />
  </FormControl>
);
WithLabel.args = {};

export const ReadOnlyWithLabel = (args) => (
  <FormControl isReadOnly id="lastName">
    <FormLabel>Last name</FormLabel>
    <TextField name="lastName" {...args} />
  </FormControl>
);
ReadOnlyWithLabel.args = {};

export const WithLabelAndHelperText = (args) => (
  <FormControl id="username">
    <FormLabel>Username</FormLabel>
    <TextField name="username" {...args} />
    <FormHelperText>Helper text that is helpful</FormHelperText>
  </FormControl>
);
WithLabelAndHelperText.args = {};

export const WithErrorLabel = (args) => (
  <FormControl isInvalid id="email">
    <FormLabel>Email</FormLabel>
    <TextField name="email" type="email" {...args} />
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);
WithErrorLabel.args = {
  defaultValue: 'blah',
};

export const WithErrorLabelAndHelperText = (args) => (
  <FormControl isInvalid id="firstName">
    <FormLabel>First name</FormLabel>
    <TextField name="email" type="firstName" {...args} />
    <FormHelperText>Helper text that is helpful</FormHelperText>
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);
WithErrorLabelAndHelperText.args = {
  defaultValue: 'blah',
};
