import React from 'react';
import {
  Tag as ChakraTag,
  TagRightIcon as ChakraTagRightIcon,
  TagLeftIcon as ChakraTagLeftIcon,
  TagLabel as ChakraTagLabel,
} from '@chakra-ui/react';

export function Tag({ children, ...props }) {
  return <ChakraTag {...props}>{children}</ChakraTag>;
}

export function TagLabel({ children, ...props }) {
  return (
    <ChakraTagLabel textOverflow="unset" whiteSpace="break-spaces" {...props}>
      {children}
    </ChakraTagLabel>
  );
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
