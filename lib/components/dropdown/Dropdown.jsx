import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { useFormControlContext } from '@chakra-ui/react';
import { DropdownIndicator } from './DropdownIndicator';
import { ClearIndicator } from './ClearIndicator';

const getFocusStyles = state => {
  if (state.isFocused) {
    if (state.selectProps.isInvalid) {
      return '0px 0px 0px 1px #c6352d inset, #c6352d 0px 0px 0px 3px'
    }
    return '0px 0px 0px 1px #3b2492 inset, #3b2492 0px 0px 0px 3px';
  }

  return 'initial';
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: 0,
    borderColor: state.selectProps.isInvalid ? '#c6352d' : '#8a9bb7',
    boxShadow: getFocusStyles(state),
    backgroundColor: state.isDisabled ? '#eef1f6' : '#ffffff',
    ':hover': {
      borderColor: '#614ab6',
    },
    ':active': {
      borderColor: '#3b2492',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '8px 4px 8px 16px',
    minHeight: '40px',
    height: state.selectProps.isMulti ? 'auto' : '40px',
  }),
  input: () => ({
    visibility: 'visible',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#182042',
    margin: '0 2px',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: '0 8px 0 4px',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#c6d0e2',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#182042',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#8a9bb7',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#182042',
  }),
  multiValue: (provided) => ({
    ...provided,
    maxWidth: '100%',
    backgroundColor: '#eef1f6',
    // border: '1px solid #c6d0e2',
    // borderRadius: '4px',
    fontSize: '12px',
    lineHeight: '1.7',
    fontWeight: 'normal',
    color: '#182042',
  }),
  multiValueLabel: () => ({
    textOverflow: 'initial',
    whiteSpace: 'initial',
    padding: '2px 2px 2px 6px',
    border: '1px solid #c6d0e2',
    borderRightColor: 'transparent',
    borderRadius: '4px',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    padding: '2px 6px 2px 2px',
    border: '1px solid #c6d0e2',
    borderLeftColor: 'transparent',
    borderRadius: '4px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    ':hover': {
      backgroundColor: '#fceeed',
      border: '1px solid #f5bfbc',
      borderLeftColor: '#f5bfbc',
      color: '#c6352d',
    },
  }),
};

export function Dropdown({ ...props }) {
  const field = useFormControlContext();

  let fieldProps = {};
  if (field) {
    fieldProps.isDisabled = field.isReadOnly;
    fieldProps.isRequired = field.isRequired;
    fieldProps.isInvalid = field.isInvalid;
  }

  return (
    <Select 
      {...props}
      {...fieldProps}
      components={{ DropdownIndicator, ClearIndicator }}
      styles={customStyles}
    />
  );
}

export function AsyncDropdown({ ...props }) {
  const field = useFormControlContext();

  let fieldProps = {};
  if (field) {
    fieldProps.isDisabled = field.isReadOnly;
    fieldProps.isRequired = field.isRequired;
    fieldProps.isInvalid = field.isInvalid;
  }

  return (
    <AsyncSelect
      {...props}
      {...fieldProps}
      components={{ DropdownIndicator, ClearIndicator }}
      styles={customStyles}
    />
  );
}

export function AsyncCreatableDropdown({ ...props }) {
  const field = useFormControlContext();

  let fieldProps = {};
  if (field) {
    fieldProps.isDisabled = field.isReadOnly;
    fieldProps.isRequired = field.isRequired;
    fieldProps.isInvalid = field.isInvalid;
  }

  return (
    <AsyncCreatableSelect
      {...props}
      {...fieldProps}
      components={{ DropdownIndicator, ClearIndicator }}
      styles={customStyles}
    />
  );
}