import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const UnlockIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M17.984 2c-.906 0-1.75.234-2.53.703a5.124 5.124 0 00-1.829 1.828 4.84 4.84 0 00-.656 2.485V9.03h-9c-.531 0-1 .203-1.406.61A1.852 1.852 0 002 11v10.031c0 .532.188.985.563 1.36.406.406.874.609 1.406.609h12c.562 0 1.031-.203 1.406-.61.406-.374.61-.828.61-1.359V11c0-.531-.204-.984-.61-1.36a1.834 1.834 0 00-1.406-.609h-.985V7.016c0-.844.282-1.547.844-2.11a2.937 2.937 0 012.156-.89c.844 0 1.547.296 2.11.89.593.563.89 1.266.89 2.11V9.03H23V7.016c0-.907-.234-1.735-.703-2.485a4.675 4.675 0 00-1.828-1.828A4.595 4.595 0 0017.984 2zM9.97 14c.562 0 1.031.203 1.406.61.406.374.61.843.61 1.406 0 .562-.204 1.047-.61 1.453-.375.375-.844.562-1.406.562-.531 0-1-.187-1.406-.562A2.07 2.07 0 018 16.016c0-.563.188-1.032.563-1.407.406-.406.874-.609 1.406-.609z"
      fill="currentColor"
    />
  </Icon>
);

UnlockIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
