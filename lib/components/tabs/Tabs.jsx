import React from 'react';
import { Tabs as ChakraTabs } from '@chakra-ui/react';

export function Tabs({ children, ...props }) {
  return <ChakraTabs {...props}>{children}</ChakraTabs>;
}
