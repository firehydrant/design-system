import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const HomeFilledIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M9.981 21v-6.347h4.038V21h4.976v-8.48H22L12 3 2 12.52h3.005V21H9.98z"
      fill="currentColor"
    />
  </Icon>
);

HomeFilledIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
