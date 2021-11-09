import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ChevronDownIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M7.40625 8L12 12.962L16.5938 8L18 9.51899L12 16L6 9.51899L7.40625 8Z"
      fill="currentColor"
    />
  </Icon>
);

ChevronDownIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
