import React from 'react';
import { Td as ChakraTd, TableCellProps } from '@chakra-ui/react';

interface TdProps extends TableCellProps {
  isInteractive?: Boolean;
}

export function Td({ children, isInteractive, ...rest }: TdProps) {
  return (
    <ChakraTd {...rest} py={isInteractive ? 'mg2' : '20px'}>
      {children}
    </ChakraTd>
  );
}
