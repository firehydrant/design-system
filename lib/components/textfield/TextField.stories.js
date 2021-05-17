import React from 'react';
import { TextField } from './TextField';
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '../../main';

export default {
  title: 'Components/Forms/TextField',
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

const WithLabelTemplate = (args) => (
  <FormControl id="name">
    <FormLabel>Name</FormLabel>
    <TextField name="name" {...args} />
  </FormControl>
);
export const WithLabel = WithLabelTemplate.bind({});
WithLabel.args = {};

const ReadOnlyWithLabelTemplate = (args) => (
  <FormControl isReadOnly id="lastName">
    <FormLabel>Last name</FormLabel>
    <TextField name="lastName" {...args} />
  </FormControl>
);
export const ReadOnlyWithLabel = ReadOnlyWithLabelTemplate.bind({});
ReadOnlyWithLabel.args = {};

const WithLabelAndHelperTextTemplate = (args) => (
  <FormControl id="username">
    <FormLabel>Username</FormLabel>
    <TextField name="username" {...args} />
    <FormHelperText>You username should be awesome</FormHelperText>
  </FormControl>
);
export const WithLabelAndHelperText = WithLabelAndHelperTextTemplate.bind({});
WithLabelAndHelperText.args = {};

const WithErrorLabelTemplate = (args) => (
  <FormControl isInvalid id="email">
    <FormLabel>Email</FormLabel>
    <TextField name="email" type="email" {...args} />
    <FormErrorMessage>Email address is invalid.</FormErrorMessage>
  </FormControl>
);
export const WithErrorLabel = WithErrorLabelTemplate.bind({});
WithErrorLabel.args = {
  defaultValue: 'blah',
};

const WithErrorLabelAndHelperTextTemplate = (args) => (
  <FormControl isInvalid id="firstName">
    <FormLabel>First name</FormLabel>
    <TextField name="email" type="firstName" {...args} />
    <FormHelperText>First name always before the last</FormHelperText>
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);
export const WithErrorLabelAndHelperText = WithErrorLabelAndHelperTextTemplate.bind(
  {},
);
WithErrorLabelAndHelperText.args = {};

const WithResponsiveWidthTemplate = (args) => (
  <FormControl width={['375px', '768px', '1024px']} id="firstName">
    <FormLabel>First name</FormLabel>
    <TextField name="email" type="firstName" {...args} />
    <FormHelperText>First name always before the last</FormHelperText>
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);
export const WithResponsiveWidth = WithResponsiveWidthTemplate.bind({});
WithResponsiveWidth.args = {};
