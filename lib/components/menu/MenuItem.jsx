import React from 'react';
import { MenuItem as ChakraMenuItem } from "@chakra-ui/react";
import { Box } from '../../main';

export function MenuItem({option, ...props}) {
  return (
    <ChakraMenuItem icon={option.leftIcon || null} isDisabled={option.isDisabled} {...props}>
      {option.label}
      {option.rightIcon && <Box ml="2">{option.rightIcon}</Box>}
    </ChakraMenuItem>
  )
}
