import React from 'react';
import { Flex, Stack, RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

export function RadioGroup({ children, horizontal, ...props }) {
  // display: flex needed see issue -> https://github.com/chakra-ui/chakra-ui/issues/2100
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
