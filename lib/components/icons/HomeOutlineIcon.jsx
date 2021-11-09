import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const HomeOutlineIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 5.826l5.023 4.76v8.282h-2.018V12.52h-6.01v6.347H6.977v-8.281L12 5.827zM12 3L2 12.52h3.005V21h6.01v-6.347h1.97V21h6.01v-8.48H22L12 3z"
      fill="currentColor"
    />
  </Icon>
);

HomeOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
