import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const MinusIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path d="M19,13H5V11H19V13Z" fill="currentColor" />
  </Icon>
);

MinusIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
