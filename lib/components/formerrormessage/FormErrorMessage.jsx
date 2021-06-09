import React from 'react';
import { FormErrorMessage as ChakraFormErrorMessage } from '@chakra-ui/react';
import { Icon } from '../icons';

export function FormErrorMessage({ children, ...props }) {
  return (
    <ChakraFormErrorMessage
      fontSize="7"
      lineHeight="7"
      mt="1"
      color="red.70"
      {...props}
    >
      <Icon name="error" width="20px" height="20px" mr="1" />
      {children}
    </ChakraFormErrorMessage>
  );
}
