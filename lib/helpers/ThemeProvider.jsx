import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

export const ThemeProvider = ({ children, ...props }) => {
  return <ChakraProvider theme={theme} {...props}>{children}</ChakraProvider>;
};
