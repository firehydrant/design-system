import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ArrowUpIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M12.9941 20H11.0059L11.0059 7.88166L5.42012 13.4201L4 12L12 4L20 12L18.5799 13.4201L12.9941 7.88166L12.9941 20Z"
      fill="currentColor"
    />
  </Icon>
);

ArrowUpIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
