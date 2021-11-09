import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const ImportIcon = (props) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" {...props}>
    <path
      d="M15 12L10.9688 8.02339V11.0175H3V12.9825H10.9688V15.9766L15 12ZM21 17.9883V6.0117C21 5.45029 20.7969 4.98246 20.3906 4.60819C20.0156 4.20273 19.5469 4 18.9844 4H6.98438C6.42188 4 5.9375 4.20273 5.53125 4.60819C5.15625 4.98246 4.96875 5.45029 4.96875 6.0117V9.00585H6.98438V6.0117H18.9844V17.9883H6.98438V14.9942H4.96875V17.9883C4.96875 18.5497 5.15625 19.0331 5.53125 19.4386C5.9375 19.8129 6.42188 20 6.98438 20H18.9844C19.5469 20 20.0156 19.8129 20.3906 19.4386C20.7969 19.0331 21 18.5497 21 17.9883Z"
      fill="currentColor"
    />
  </Icon>
);

ImportIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
