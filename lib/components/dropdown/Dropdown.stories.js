import React from 'react';
import { Dropdown, AsyncDropdown } from  './index';
import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '../../main';

export default {
  title: 'Components/Forms/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      description: 'collection of selectable options',
      table: {
        type: { summary: 'array '},
      },
    },
    placeholder: {
      description: 'placeholder text for dropdown box',
      table: {
        type: { summary: 'string'},
      },
    },
    isClearable: {
      description: 'is the selected value clearable',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: true },
      },
    },
    isDisabled: {
      description: 'is the select disabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
    },
    isLoading: {
      description: 'is the select loading (async)',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
    },
    isMulti: {
      description: 'supports multiple selected options',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
    },
    isSearchable: {
      description: 'is search functionality enabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => (
  <FormControl>
    <Dropdown {...args} />
  </FormControl>
);

const defaultOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

const longOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Third option that is a really long label so we want to see it wrap to two or three lines'}
];

const searchableOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' },
  { value: 'five', label: 'Five' },
  { value: 'six', label: 'Six' },
  { value: 'seven', label: 'Seven' },
  { value: 'eight', label: 'Eight' },
];

export const Default = Template.bind({});
Default.args = {
  options: defaultOptions,
  placeholder: 'Dropdown',
  onChange: opt => console.log('options', opt),
};

export const MultiDropdown = Template.bind({});
MultiDropdown.args = {
  options: longOptions,
  placeholder: 'Multi Dropdown',
  isMulti: true,
  onChange: opt => console.log('options', opt),
};

export const NotClearableDropdown = Template.bind({});
NotClearableDropdown.args = {
  options: defaultOptions,
  placeholder: 'Not Clearable Dropdown',
  isClearable: false,
  onChange: opt => console.log('options', opt),
};

export const SearchableDropdown = Template.bind({});
SearchableDropdown.args = {
  options: searchableOptions,
  placeholder: 'Searchable Dropdown',
  isMulti: true,
  isSearchable: true,
  onChange: opt => console.log('options', opt),
};

export const OptionalDropdown = () => (
  <FormControl id="optional">
    <FormLabel variant="primary">Select (Optional)</FormLabel>
    <Dropdown name="optional" placeholder="Optional Dropdown" options={defaultOptions} onChange={opt => console.log('options', opt)} />
  </FormControl>
);

export const RequiredDropdown = () => (
  <FormControl id="required" isRequired>
    <FormLabel variant="primary">Select</FormLabel>
    <Dropdown name="required" placeholder="Required Dropdown" options={defaultOptions} onChange={opt => console.log('options', opt)} />
    <FormErrorMessage>This field is required.</FormErrorMessage>
  </FormControl>
);

// Async

export const DropdownAsync = () => {
  const loadOptions = async (loadedOptions) => {
    const response = await fetch('https://www.anapioficeandfire.com/api/books');
    const responseJSON = await response.json();
    const options = responseJSON.map(book => ({ value: book.id, label: book.name }));
  
    return options;
  };

  return (
    <FormControl>
      <AsyncDropdown isMulti cacheOptions defaultOptions loadOptions={loadOptions} onChange={opt => console.log('options', opt)} />
    </FormControl>
  )
};