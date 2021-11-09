import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const InfrastructureOutlineIcon = (props) => (
  <Icon boxSize="24px" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      d="M2 3v6h2.958l1.972 6h-.94v6H12v-4.594l5.4-5.39H22v-6h-6.01v4.546L10.592 15H9.043L7.07 9h.94V3H2zm1.972 2.016H5.99v1.968H3.97V5.016zm14.037 1.968h2.02V9h-2.02V6.984zm-10 10.032h1.972v1.968H8.01v-1.968z"
      fill="currentColor"
    />
  </Icon>
);

InfrastructureOutlineIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
