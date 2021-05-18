import React from 'react';
import { Table as ChakraTable, Td as ChakraTd } from '@chakra-ui/react';

export function Table({ children, ...rest }) {
  return <ChakraTable {...rest}>{children}</ChakraTable>;
}

export function Td({ children, isInteractive, ...rest }) {
  return (
    <ChakraTd {...rest} py={isInteractive ? 'mg2' : '20px'}>
      {children}
    </ChakraTd>
  );
}
