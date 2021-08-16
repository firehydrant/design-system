import React from 'react';
import { Icon } from '../../main';
import { components } from 'react-select';

export const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    { props.selectProps.menuIsOpen ? <Icon name="chevronUp" /> : <Icon name="chevronDown" /> }
  </components.DropdownIndicator>
); 