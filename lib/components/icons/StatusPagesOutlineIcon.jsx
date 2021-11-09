import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const StatusPagesOutlineIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M12.24 7.264H4.02c-.546 0-1.026.215-1.443.645A1.99 1.99 0 002 9.347v4.265c0 .562.192 1.057.577 1.487.417.397.897.595 1.442.595h1.058v4.265c0 .297.096.545.288.744a.963.963 0 00.722.297h2.067c.288 0 .529-.1.721-.297.192-.199.288-.447.288-.744v-4.265h3.077l5.145 4.265V3L12.24 7.264zm3.077 8.034l-2.067-1.686H4.02V9.347h9.23l2.067-1.686v7.636zM22 11.479a4.8 4.8 0 01-.721 2.53 4.093 4.093 0 01-1.875 1.685v-8.43A4.392 4.392 0 0121.279 9c.48.76.721 1.587.721 2.48z"
      fill="currentColor"
    />
  </Icon>
);

StatusPagesOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
