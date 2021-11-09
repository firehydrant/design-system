import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const WarningIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 2L1 22H23L12 2ZM12 6.19753L19.5362 19.8765H4.46383L12 6.19753ZM11.017 10.3951V14.642H12.983V10.3951H11.017ZM11.017 16.716V18.8395H12.983V16.716H11.017Z"
      fill="currentColor"
    />
  </Icon>
);

WarningIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
