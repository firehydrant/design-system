import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ArrowDownIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M11.0059 4H12.9941V16.1183L18.5799 10.5799L20 12L12 20L4 12L5.42012 10.5799L11.0059 16.1183V4Z"
      fill="currentColor"
    />
  </Icon>
);

ArrowDownIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
