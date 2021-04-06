import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

export const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
