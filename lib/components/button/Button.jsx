import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export function Button({ children, ...props }) {
  return (
    <ChakraButton iconSpacing={0} {...props}>
      {children}
    </ChakraButton>
  );
}
