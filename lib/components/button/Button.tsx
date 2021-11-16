import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import { Button as ButtonStyles } from './button.theme';

const ButtonVariants = Object.keys(ButtonStyles.variants);

type Variants = typeof ButtonVariants[number];

interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant: Variants;
}

export function Button(props: ButtonProps) {
  return <ChakraButton my="mg0" iconSpacing={1} {...props} />;
}
