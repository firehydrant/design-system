import React from 'react';
import { Alert as ChakraAlert, AlertIcon as ChakraAlertIcon, CloseButton as ChakraCloseButton } from '@chakra-ui/react';

export function Alert({ children, ...props }) {
  return (
    <ChakraAlert {...props}>
      <ChakraAlertIcon></ChakraAlertIcon>
      { children }
    </ChakraAlert>
  );
}

export function AlertWithClose({ children, ...props }) {
  return (
    <ChakraAlert {...props}>
      <ChakraAlertIcon></ChakraAlertIcon>
      { children }
      <ChakraCloseButton></ChakraCloseButton>
    </ChakraAlert>
  );
}