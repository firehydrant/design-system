import React from 'react';
import PropTypes from 'prop-types';
import {
  Popover,
  Portal,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverHeader,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { Button } from '../button';
import { Flex } from '../../main';

export function PopoverBasis({
  body,
  buttonVariant,
  footerButtonAction,
  footerButtonText,
  headerText,
  hasClose,
  popoverTrigger,
  smallPopover,
  ...props
}) {
  const onButtonClick = (onClose) => {
    footerButtonAction();
    onClose();
  };
  return (
    <Popover {...props}>
      {({ onClose }) => (
        <>
          {popoverTrigger}
          <Portal>
            <PopoverContent py={3} width={smallPopover ? '230px' : '320px'}>
              <Flex
                mx={3}
                flexDirection="row"
                align="center"
                justify={headerText ? 'space-between' : 'flex-end'}
                pb={2}
                sx={
                  headerText &&
                  hasClose && { borderBottom: '1px solid #eef1f6' }
                }
              >
                {headerText && (
                  <PopoverHeader
                    p={0}
                    color="grey.90"
                    fontWeight="bold"
                    fontSize={5}
                    borderBottom={0}
                  >
                    {headerText}
                  </PopoverHeader>
                )}
                {hasClose && (
                  <PopoverCloseButton sx={{ position: 'relative', top: '0' }} />
                )}
              </Flex>
              <PopoverBody pt={headerText ? 2 : 0}>{body}</PopoverBody>
              <PopoverFooter pb={0} borderTop="none">
                <Button
                  variant={buttonVariant}
                  onClick={() => onButtonClick(onClose)}
                >
                  {footerButtonText}
                </Button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

PopoverBasis.propTypes = {
  body: PropTypes.element.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  footerButtonAction: PropTypes.func.isRequired,
  footerButtonText: PropTypes.string.isRequired,
  headerText: PropTypes.string,
  hasClose: PropTypes.bool,
  smallPopover: PropTypes.bool,
  popoverTrigger: PropTypes.element.isRequired,
};

PopoverBasis.defaultProps = {
  hasClose: true,
  smallPopover: false,
};
