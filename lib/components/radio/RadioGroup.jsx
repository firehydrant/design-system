import React from 'react';
import { Stack, RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

export function RadioGroup({ children, horizontal, ...props }) {
  return (
    <ChakraRadioGroup {...props}>
      <Stack
        align="stretch"
        direction={horizontal ? 'row' : 'column'}
        spacing={horizontal ? '4' : 'mg0'}
      >
        {children}
      </Stack>
    </ChakraRadioGroup>
  );
}
