import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const CloseIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M19 6.4094L17.5906 5L12 10.5906L6.4094 5L5 6.4094L10.5906 12L5 17.5906L6.4094 19L12 13.4094L17.5906 19L19 17.5906L13.4094 12L19 6.4094Z"
      fill="currentColor"
    />
  </Icon>
);

CloseIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
