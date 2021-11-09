import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ChevronUpIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M16.5938 16L12 11.038L7.40625 16L6 14.481L12 8L18 14.481L16.5938 16Z"
      fill="currentColor"
    />
  </Icon>
);

ChevronUpIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
