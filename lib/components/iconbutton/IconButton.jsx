import React from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import { Icon } from '../icons';

export function IconButton({ children, name, ...props }) {
  return (
    <ChakraIconButton
      alignItems="center"
      icon={<Icon name={name} />}
      {...props}>
      {children}
    </ChakraIconButton>
  );
}
