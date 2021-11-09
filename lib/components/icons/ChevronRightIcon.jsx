import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ChevronRightIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M8 16.5938L12.962 12L8 7.40625L9.51899 6L16 12L9.51899 18L8 16.5938Z"
      fill="currentColor"
    />
  </Icon>
);

ChevronRightIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
