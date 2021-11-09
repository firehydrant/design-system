import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const CheckIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M21 6.46853L8.64611 19L3 13.2727L4.44772 11.8042L8.64611 16.0629L19.5523 5L21 6.46853Z"
      fill="currentColor"
    />
  </Icon>
);

CheckIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
