import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';

export function Dropdown({ ...props }) {
  return (
    <Select {...props} />
  );
}

export function AsyncDropdown({ ...props }) {
  return (
    <AsyncSelect {...props} />
  );
}

export function AsyncCreatableDropdown({ ...props }) {
  return (
    <AsyncCreatableSelect {...props} />
  );
}