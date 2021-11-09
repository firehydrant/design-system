import React from 'react';
import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { colorOptions } from '../../theme/colors.theme';

export const DeleteIcon = ({ color = 'grey.90', ...props }) => (
  <Icon boxSize="24px" viewBox="0 0 24 24" color={color} {...props}>
    <path
      d="M19 3.98438H15.5235L14.4899 3H9.51007L8.47651 3.98438H5V6H19V3.98438ZM5.98658 18.9844C5.98658 19.5469 6.1745 20.0312 6.55034 20.4375C6.95749 20.8125 7.44295 21 8.00671 21H15.9933C16.557 21 17.0268 20.8125 17.4027 20.4375C17.8098 20.0312 18.0134 19.5469 18.0134 18.9844V6.98438H5.98658V18.9844Z"
      fill="currentColor"
    />
  </Icon>
);

DeleteIcon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
};
