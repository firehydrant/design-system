import React from 'react';
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from '../../main';
import { Radio } from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    isChecked: {
      description: 'if radio is checked',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isReadOnly: {
      description: 'if radio is read only',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isInvalid: {
      description: 'if radio is invalid',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultIsRadio: {
      description: 'if radio is default checked',
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

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Radio' };

export const RadioChecked = Template.bind({});
RadioChecked.args = { children: 'Radio', isChecked: true };

export const RadioInvalid = Template.bind({});
RadioInvalid.args = { children: 'Radio', isInvalid: true };

export const RadioCheckedInvalid = Template.bind({});
RadioCheckedInvalid.args = {
  children: 'Radio',
  isChecked: true,
  isInvalid: true,
};

export const RadioReadOnly = Template.bind({});
RadioReadOnly.args = {
  children: 'Radio',
  isReadOnly: true,
};

export const RadioReadOnlyChecked = Template.bind({});
RadioReadOnlyChecked.args = {
  children: 'Radio',
  isChecked: true,
  isReadOnly: true,
};

export const RadioGroupHorizontalTemplate = () => (
  <FormControl>
    <FormLabel>Vegetables</FormLabel>
    <RadioGroup horizontal>
      <Radio value="arugula">Arugula</Radio>
      <Radio value="asparagus">Asparagus</Radio>
    </RadioGroup>
  </FormControl>
);

export const RadioGroupVerticalTemplate = () => (
  <FormControl isInvalid>
    <FormLabel>Fruits</FormLabel>
    <RadioGroup>
      <Radio value="apples">Apples</Radio>
      <Radio value="oranges">Oranges</Radio>
    </RadioGroup>
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);

export const RadioGroupVerticalMultilineTemplate = () => (
  <Flex maxWidth="250px">
    <FormControl>
      <FormLabel>Why FireHydrant</FormLabel>
      <RadioGroup>
        <Radio value="everything" isChecked>
          Everything you need to respond to an incident
        </Radio>
        <Radio value="create">Create consistent incident processes, fast</Radio>
        <Radio value="give">Give copy and paste a break</Radio>
      </RadioGroup>
      <FormErrorMessage>This field is required.</FormErrorMessage>
    </FormControl>
  </Flex>
);
