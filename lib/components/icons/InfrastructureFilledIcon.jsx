import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const InfrastructureFilledIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M2 9V3h6.01v6h-.94l1.972 6h1.55l5.399-5.438V5.016H22v6h-4.6l-5.4 5.39V21H5.99v-6h.94L4.958 9H2z"
      fill="currentColor"
    />
  </Icon>
);

InfrastructureFilledIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
