import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const DownloadIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M5 21h14v-2.132H5V21zM19 9.347h-3.993V3H8.993v6.347H5l7 7.388 7-7.388z"
      fill="currentColor"
    />
  </Icon>
);

DownloadIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
