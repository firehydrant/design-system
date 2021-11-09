import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const AnalyticsOutlineIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M15.99 11.74l4.273-8.125L22 4.708 16.742 14.76l-6.526-4.166-4.789 9.166H22V22H2V2h1.972v16.146l5.54-10.573 6.479 4.167z"
      fill="currentColor"
    />
  </Icon>
);

AnalyticsOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
