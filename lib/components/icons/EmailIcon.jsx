import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const EmailIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M22 6.0117C22 5.45029 21.7966 4.98246 21.3897 4.60819C21.0141 4.20273 20.5603 4 20.0282 4H3.97183C3.43975 4 2.97027 4.20273 2.56338 4.60819C2.18779 4.98246 2 5.45029 2 6.0117V17.9883C2 18.5497 2.18779 19.0331 2.56338 19.4386C2.97027 19.8129 3.43975 20 3.97183 20H20.0282C20.5603 20 21.0141 19.8129 21.3897 19.4386C21.7966 19.0331 22 18.5497 22 17.9883V6.0117ZM20.0282 6.0117L12 11.0175L3.97183 6.0117H20.0282ZM20.0282 17.9883H3.97183V8.02339L12 12.9825L20.0282 8.02339V17.9883Z"
      fill="currentColor"
    />
  </Icon>
);

EmailIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
