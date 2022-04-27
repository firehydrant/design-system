import { PopoverTrigger } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import { PopoverBasis } from './PopoverBasis';

export function PopoverInput({ trigger, ...props }) {
  return (
    <PopoverBasis
      popoverTrigger={<PopoverTrigger>{trigger}</PopoverTrigger>}
      buttonVariant="primary"
      {...props}
    />
  );
}

PopoverInput.propTypes = {
  body: PropTypes.element.isRequired,
  footerButtonAction: PropTypes.func.isRequired,
  footerButtonText: PropTypes.string.isRequired,
  headerText: PropTypes.string,
  hasClose: PropTypes.bool,
  trigger: PropTypes.element.isRequired,
  smallPopover: PropTypes.bool,
};

PopoverInput.defaultProps = {
  hasClose: true,
  smallPopover: false,
};
