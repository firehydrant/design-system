import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export function Button({ children, ...props }) {
  return (
    <ChakraButton my="mg0" iconSpacing={1} {...props}>
      {children}
    </ChakraButton>
  );
}
