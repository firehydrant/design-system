import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

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