import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export function Button(props: ButtonProps) {
  return <ChakraButton my="mg0" iconSpacing={1} {...props} />;
}
