import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from '../lib/theme';

export default function FrameComponent({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
