import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { useFormControlContext } from '@chakra-ui/react';
import { DropdownIndicator } from './DropdownIndicator';
import { ClearIndicator } from './ClearIndicator';
import { MultiValueRemove } from './MultiValueRemove';

const getFocusStyles = state => {
  if (state.isFocused) {
    if (state.selectProps.isInvalid) {
      return '0px 0px 0px 1px #c6352d inset, #c6352d 0px 0px 0px 3px'
    }
    return '0px 0px 0px 1px #3b2492 inset, #3b2492 0px 0px 0px 3px'
  }

  return 'initial';
};

const getBorderStyles = state => {
  if (state.isFocused) {
    return '#3b2492'
  } else if (state.selectProps.isInvalid) {
    return '#c6352d'
  }

  return '#8a9bb7';
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: 0,
    borderColor: getBorderStyles(state),
    boxShadow: getFocusStyles(state),
    backgroundColor: state.isDisabled ? '#eef1f6' : '#ffffff',
    ':hover': {
      borderColor: '#614ab6',
    },
    ':active': {
      borderColor: '#3b2492',
    },
    ':focus': {
      borderColor: '#3b2492',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: state.selectProps.isMulti ? '6px 4px 6px 16px' : '8px 4px 8px 16px',
    minHeight: '40px',
    height: state.selectProps.isMulti ? 'auto' : '40px',
  }),
  input: () => ({
    visibility: 'visible',
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#182042',
    margin: '0 2px 0 0',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: '0 8px 0 4px',
  }),
  indicatorSeparator: (state) => ({
    width: '1px',
    height: '16px',
    backgroundColor: state.isDisabled ? 'transparent' : '#c6d0e2',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#c6d0e2',
    ':hover': {
      color: '#c6d0e2'
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? '#c6d0e2' : '#182042',
    ':hover': {
      color: 'initial'
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'normal',
    color: '#8a9bb7',
    marginLeft: '0',
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
    margin: '2px 2px 2px 0',
    maxWidth: '100%',
    backgroundColor: '#eef1f6',
    boxShadow: 'inset 0 0 0 1px #c6d0e2',
    borderRadius: '4px',
    fontSize: '12px',
    lineHeight: '1.7',
    fontWeight: 'normal',
    color: '#182042',
  }),
  multiValueLabel: () => ({
    textOverflow: 'initial',
    whiteSpace: 'initial',
    padding: '2px 2px 2px 6px',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    padding: '2px 6px 2px 2px',
    ':hover': {
      backgroundColor: '#fceeed',
      boxShadow: 'inset 0 0 0 1px #f5bfbc',
      borderRadius: '4px',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      color: '#c6352d',
      cursor: 'pointer',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#ffffff',
    marginTop: '4px',
    marginBottom: '0',
    boxShadow: '4px 4px 0px 0px rgba(24, 32, 66, 0.16)',
  }),
  menuList: () => ({
    padding: '0',
    border: '1px solid #c6d0e2',
    borderRadius: '4px',
    '& :first-child': {
      borderTopRightRadius: '4px',
      borderTopLeftRadius: '4px',
    },
    '& :last-child': {
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '10px 16px',
    color: state.isFocused ? '#614ab6' : '#182042',
    backgroundColor: state.isFocused ? '#f1edff' : 'transparent',
    boxShadow: state.isFocused ? '0 0 0 2px #3b2492' : '0',
    ':hover': {
      color: '#614ab6',
      backgroundColor: '#f1edff',
    }
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
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
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
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
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
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
      styles={customStyles}
    />
  );
}