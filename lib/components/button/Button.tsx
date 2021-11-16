import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import { Button as ButtonTheme } from './button.theme';

const buttonVariants = [...Object.keys(ButtonTheme.variants)] as Array<
  keyof typeof ButtonTheme.variants
>;

type Variants = typeof buttonVariants[number];

interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant: Variants;
}

export function Button(props: ButtonProps) {
  return <ChakraButton my="mg0" iconSpacing={1} {...props} />;
}
