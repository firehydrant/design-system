import React from 'react';
import PropTypes from 'prop-types';
import { PopoverTrigger } from '@chakra-ui/react';
import { HelpFilledIcon } from '../icons';
import { Box } from '../../main';
import { PopoverBasis } from './PopoverBasis';

export function PopoverDialog({ ...props }) {
  return (
    <PopoverBasis
      buttonVariant="secondary"
      popoverTrigger={
        <PopoverTrigger>
          <Box width={5}>
            <HelpFilledIcon
              data-testid="help-icon"
              color="grey.50"
              aria-label="Additional help"
            />
          </Box>
        </PopoverTrigger>
      }
      {...props}
    />
  );
}

PopoverDialog.propTypes = {
  body: PropTypes.element.isRequired,
  footerButtonAction: PropTypes.func.isRequired,
  footerButtonText: PropTypes.string.isRequired,
  headerText: PropTypes.string,
  hasClose: PropTypes.bool,
  smallPopover: PropTypes.bool,
};

PopoverDialog.defaultProps = {
  headerText: null,
  hasClose: true,
  smallPopover: false,
};
