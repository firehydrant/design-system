import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ArrowRightIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M4 12.9941L4 11.0059H16.1183L10.5799 5.42012L12 4L20 12L12 20L10.5799 18.5799L16.1183 12.9941H4Z"
      fill="currentColor"
    />
  </Icon>
);

ArrowRightIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
