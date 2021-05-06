import React from 'react';
import { TextArea } from './TextArea';
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '../../main';

export default {
  title: 'Components/Forms/TextArea',
  component: TextArea,
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

const Template = (args) => <TextArea {...args} />;

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
  <FormControl id="description">
    <FormLabel>Description</FormLabel>
    <TextArea name="description" {...args} />
  </FormControl>
);
export const WithLabel = WithLabelTemplate.bind({});
WithLabel.args = { defaultValue: 'Value' };

const WithLabelOptionalTemplate = (args) => (
  <FormControl id="description">
    <FormLabel isOptional>Description</FormLabel>
    <TextArea name="description" {...args} />
  </FormControl>
);
export const WithLabelOptional = WithLabelOptionalTemplate.bind({});
WithLabelOptional.args = { defaultValue: 'Value' };

const ReadOnlyWithLabelTemplate = (args) => (
  <FormControl isReadOnly id="customerImpact">
    <FormLabel>Customer Impact</FormLabel>
    <TextArea name="customerImpact" {...args} />
  </FormControl>
);
export const ReadOnlyWithLabel = ReadOnlyWithLabelTemplate.bind({});
ReadOnlyWithLabel.args = { defaultValue: 'Value' };

const WithLabelAndHelperTextTemplate = (args) => (
  <FormControl id="incidentDescription">
    <FormLabel>Incident description</FormLabel>
    <TextArea name="incidentDescription" {...args} />
    <FormHelperText>
      Write a short description of how this incident is currently impacting
      customers if applicable
    </FormHelperText>
  </FormControl>
);
export const WithLabelAndHelperText = WithLabelAndHelperTextTemplate.bind({});
WithLabelAndHelperText.args = {};

const WithErrorLabelTemplate = (args) => (
  <FormControl isInvalid id="whatHappened">
    <FormLabel>What Happened</FormLabel>
    <TextArea name="whatHappened" {...args} />
    <FormErrorMessage>Email address is invalid.</FormErrorMessage>
  </FormControl>
);
export const WithErrorLabel = WithErrorLabelTemplate.bind({});
WithErrorLabel.args = {
  defaultValue: 'blah',
};

const WithErrorLabelAndHelperTextTemplate = (args) => (
  <FormControl isInvalid id="description">
    <FormLabel>Description</FormLabel>
    <TextArea name="email" type="description" {...args} />
    <FormHelperText>Where in the world is Carmen Sandiego?</FormHelperText>
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);
export const WithErrorLabelAndHelperText = WithErrorLabelAndHelperTextTemplate.bind(
  {}
);
WithErrorLabelAndHelperText.args = {};
