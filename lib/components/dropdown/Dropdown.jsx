import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { useFormControlContext } from '@chakra-ui/react';
import { DropdownIndicator } from './DropdownIndicator';
import { ClearIndicator } from './ClearIndicator';
import { MultiValueRemove } from './MultiValueRemove';

import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';
import { fontSizes, fontWeights, lineHeights } from '../../theme/font.theme';
import { radii } from '../../theme/radii.theme';
import { getFocusabledIn } from 'focus-lock';

const getFocusStyles = state => {
  if (state.isFocused) {
    if (state.selectProps.isInvalid) {
      return `0px 0px 0px 1px ${colors.red[70]} inset, ${colors.red[70]} 0px 0px 0px 3px`
    }
    return `0px 0px 0px 1px ${colors.purple[70]} inset, ${colors.purple[70]} 0px 0px 0px 3px`
  }

  return 'initial';
};

const getBorderStyles = state => {
  if (state.isFocused) {
    return colors.purple[70];
  } else if (state.selectProps.isInvalid) {
    return colors.red[70];
  }

  return colors.grey[50];
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    padding: 0,
    borderColor: getBorderStyles(state),
    boxShadow: getFocusStyles(state),
    backgroundColor: state.isDisabled ? colors.grey[10] : colors.grey[0],
    transitionDuration: '0.2s',
    transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
    ':hover': {
      borderColor: colors.purple[50],
    },
    ':active': {
      borderColor: colors.purple[70],
    },
    ':focus': {
      borderColor: colors.purple[70],
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: state.selectProps.isMulti ? `${space['mg1']} ${space[1]} ${space['mg1']} ${space[3]}` : `${space[2]} ${space[1]} ${space[2]} ${space[3]}`,
    minHeight: '40px',
    height: state.selectProps.isMulti ? 'auto' : '40px',
  }),
  input: () => ({
    visibility: 'visible',
    fontSize: fontSizes[5],
    lineHeight: lineHeights[5],
    fontWeight: fontWeights[5],
    color: colors.grey[90],
    margin: `0 ${space['mg0']} 0 0`,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: `0 ${space[2]} 0 ${space[1]}`,
  }),
  indicatorSeparator: (provided, state) => ({
    // state doesn't behave how we want it to without passing provided
    width: '1px',
    height: '16px',
    backgroundColor: state.isDisabled ? 'transparent' : colors.grey[30],
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: colors.grey[30],
    ':hover': {
      color: colors.grey[30],
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? colors.grey[30] : colors.grey[90],
    ':hover': {
      color: 'initial'
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: fontSizes[5],
    lineHeight: lineHeights[5],
    fontWeight: fontWeights[5],
    color: colors.grey[50],
    marginLeft: '0',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: fontSizes[5],
    lineHeight: lineHeights[5],
    fontWeight: fontWeights[5],
    color: colors.grey[90],
  }),
  multiValue: (provided) => ({
    ...provided,
    margin: `${space['mg0']} ${space[1]} ${space['mg0']} 0`,
    maxWidth: '100%',
    backgroundColor: colors.grey[10],
    boxShadow: `inset 0 0 0 1px ${colors.grey[30]}`,
    borderRadius: radii['base'],
    fontSize: fontSizes[7],
    lineHeight: lineHeights[7],
    fontWeight: fontWeights[7],
    color: colors.grey[90],
  }),
  multiValueLabel: () => ({
    textOverflow: 'initial',
    whiteSpace: 'initial',
    padding: `${space['mg0']} ${space['mg0']} ${space['mg0']} ${space['mg1']}`,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    padding: `${space['mg0']} ${space['mg1']} ${space['mg0']} ${space['mg0']}`,
    ':hover': {
      backgroundColor: colors.red[10],
      boxShadow: `inset 0 0 0 1px ${colors.red[30]}`,
      borderRadius: radii['base'],
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      color: colors.red[70],
      cursor: 'pointer',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: colors.grey[0],
    cursor: 'pointer',
    marginTop: space[1],
    marginBottom: '0',
    boxShadow: '4px 4px 0px 0px rgba(24, 32, 66, 0.16)',
  }),
  menuList: () => ({
    padding: '0',
    border: `1px solid ${colors.grey[30]}`,
    borderRadius: radii['base'],
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
    cursor: 'pointer',
    padding: `${space['mg2']} ${space[3]}`,
    color: state.isFocused ? colors.purple[50] : colors.grey[90],
    backgroundColor: state.isFocused ? colors.purple[10] : 'transparent',
    ':focus': {
      boxShadow: `0 0 0 2px ${colors.purple[70]}`,
    },
    ':hover': {
      color: colors.purple[50],
      backgroundColor: colors.purple[10],
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