import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ChevronLeftIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M16 7.40625L11.038 12L16 16.5938L14.481 18L8 12L14.481 6L16 7.40625Z"
      fill="currentColor"
    />
  </Icon>
);

ChevronLeftIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
