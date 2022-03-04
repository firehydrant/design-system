import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const RetrospectivesIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 3a9 9 0 00-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0012 21a9 9 0 000-18z"
    ></path>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
      d="M11 7.9h-.1v5.157l.049.029 4.28 2.54.086.051.05-.086.72-1.21.052-.086-.086-.051-3.451-2.05V7.9H11z"
    ></path>
  </Icon>
);

RetrospectivesIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
