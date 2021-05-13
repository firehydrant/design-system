import React from 'react';
import {
  Tag as ChakraTag,
  TagRightIcon as ChakraTagRightIcon,
  TagLeftIcon as ChakraTagLeftIcon,
} from '@chakra-ui/react';

export function Tag({ children, ...props }) {
  return <ChakraTag {...props}>{children}</ChakraTag>;
}

export function TagRightIcon({ children, ...props }) {
  return (
    <ChakraTagRightIcon boxSize="16px" mr="0" {...props}>
      {children}
    </ChakraTagRightIcon>
  );
}

export function TagLeftIcon({ children, ...props }) {
  return (
    <ChakraTagLeftIcon boxSize="16px" mr="0" {...props}>
      {children}
    </ChakraTagLeftIcon>
  );
}
