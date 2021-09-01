import React from 'react';
import { MenuItem as ChakraMenuItem } from "@chakra-ui/react";

export function MenuItem({children, ...props}) {
  return (
    <ChakraMenuItem {...props}>
      {children}
    </ChakraMenuItem>
  )
}
