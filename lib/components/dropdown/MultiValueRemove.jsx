import React from 'react';
import { Icon } from '../../main';
import { components } from 'react-select';

export const MultiValueRemove = (props) => (
  <components.MultiValueRemove {...props}>
    <Icon height="16px" width="16px" name="close" />
  </components.MultiValueRemove>
); 