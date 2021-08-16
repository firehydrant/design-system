import React from 'react';
import { Icon } from '../../main';
import { components } from 'react-select';

export const ClearIndicator = (props) => (
  <components.ClearIndicator {...props}>
    <Icon name="close" />
  </components.ClearIndicator>
); 