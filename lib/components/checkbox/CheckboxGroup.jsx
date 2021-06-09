import React from 'react';
import { Stack, CheckboxGroup as ChakraCheckboxGroup } from '@chakra-ui/react';

export function CheckboxGroup({ children, horizontal, ...props }) {
  return (
    <ChakraCheckboxGroup {...props}>
      <Stack
        align="stretch"
        direction={horizontal ? 'row' : 'column'}
        spacing={horizontal ? '4' : 'mg0'}
      >
        {children}
      </Stack>
    </ChakraCheckboxGroup>
  );
}
