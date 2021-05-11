import React from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';

export function Container({ children, ...rest }) {
  return <ChakraContainer {...rest}>{children}</ChakraContainer>;
}
