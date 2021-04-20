import React from 'react';
import { Text as ChakraText } from '@chakra-ui/react';

export function Text({ children, ...props }) {
  return <ChakraText {...props}>{children}</ChakraText>;
}
