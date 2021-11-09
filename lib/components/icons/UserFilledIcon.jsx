import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const UserFilledIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M12 4c1.092 0 2.027.39 2.807 1.17.78.78 1.17 1.73 1.17 2.853 0 1.092-.39 2.028-1.17 2.807-.78.78-1.715 1.17-2.807 1.17-1.092 0-2.027-.39-2.807-1.17-.78-.78-1.17-1.715-1.17-2.807 0-1.122.39-2.074 1.17-2.853C9.973 4.39 10.908 4 12 4zm0 10.012c1.435 0 2.76.187 3.977.561 1.247.343 2.23.827 2.947 1.45.717.593 1.076 1.248 1.076 1.965V20H4v-2.012c0-.717.359-1.372 1.076-1.965.717-.623 1.684-1.107 2.9-1.45 1.248-.374 2.59-.561 4.024-.561z"
      fill="currentColor"
    />
  </Icon>
);

UserFilledIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
