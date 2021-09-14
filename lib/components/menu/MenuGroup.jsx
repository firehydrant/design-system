import React from 'react';
import { MenuGroup as ChakraMenuGroup } from "@chakra-ui/react";

export function MenuGroup({children, ...props}) {
  return (
    <ChakraMenuGroup {...props}>
      {children}
    </ChakraMenuGroup>
  )
}
