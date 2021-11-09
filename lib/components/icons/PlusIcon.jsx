import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const PlusIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M12.9966 3.0971L11.0034 3.0971L11.0034 11.0034L3.0971 11.0034V12.9966L11.0034 12.9966L11.0034 20.9029L12.9966 20.9029L12.9966 12.9966L20.9029 12.9966V11.0034L12.9966 11.0034L12.9966 3.0971Z"
      fill="currentColor"
    />
  </Icon>
);

PlusIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
