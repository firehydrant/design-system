import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant: 'primary' | 'secondary' | 'tertiary';
}

export function Button(props: ButtonProps) {
  return <ChakraButton my="mg0" iconSpacing={1} {...props} />;
}
